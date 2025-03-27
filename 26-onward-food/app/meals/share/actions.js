'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import turso from '@/utils/connext';
import { slugify } from '@/utils/slugify';
import fs from 'fs/promises';
import path from 'path';

export async function shareMeal(formData) {
  console.log(formData);
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  // 表单验证
  if (
      !meal.title ||
      !meal.summary ||
      !meal.instructions ||
      !meal.creator ||
      !meal.creator_email ||
      !meal.image ||
      !meal.creator_email.includes('@')
  ) {
    throw new Error('请填写所有必填字段并确保内容有效。');
  }

  // 生成唯一的 slug
  const slug = slugify(meal.title);

  // 处理图片文件
  let imagePath = '';
  try {
    // 创建上传目录（如果不存在）
    const uploadsDir = path.join(process.cwd(), 'public', 'images');
    await fs.mkdir(uploadsDir, { recursive: true });

    // 生成唯一文件名
    const extension = meal.image.name.split('.').pop();
    const fileName = `${slug}.${extension}`;
    imagePath = `/images/${fileName}`;

    // 将文件写入public目录
    const fileData = await meal.image.arrayBuffer();
    await fs.writeFile(
        path.join(uploadsDir, fileName),
        Buffer.from(fileData)
    );
  } catch (error) {
    console.error('图片保存失败', error);
    throw new Error('图片上传失败，请稍后再试。');
  }

  try {
    console.log(meal)
    // 将美食信息保存到数据库（只存储图片路径）
    await turso.execute(
        'INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [meal.title, meal.summary, meal.instructions, meal.creator, meal.creator_email, imagePath, slug]
    );
    console.log('美食信息保存成功');

    // 重定向到新创建的美食详情页
  } catch (error) {
    console.error('保存美食信息失败', error);
    throw new Error('保存美食信息时出错，请稍后再试。');
  }
  // 更新缓存
  revalidatePath('/meals');
  revalidatePath(`/meals/${slug}`);

  // 重定向
  return redirect(`/meals/${slug}`);  // 注意这里加了return
}