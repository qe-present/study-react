'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import {addMeal} from "@/utils/meals";
import { slugify } from '@/utils/slugify';
import xss from "xss";

import fs from 'fs/promises';
import path from 'path';
import {getImagePath} from "@/utils/saveImage";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

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
    throw new Error('请填写所有必填字段并确保内容有效。')
  }
  // 生成唯一的 slug
  const slug = slugify(meal.title)
  meal.slug = slug
  meal.instructions = xss(meal.instructions)

  try {
    let imagePath = await getImagePath(meal)
    console.log('图片保存成功', imagePath)
    meal.image= imagePath
  } catch (error) {
    console.error('图片保存失败', error)
    throw new Error('图片上传失败，请稍后再试。')
  }

  try {
    await addMeal(meal)
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