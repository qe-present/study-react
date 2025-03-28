import path from "path";
import fs from "fs/promises";

export  const getImagePath = async (meal) => {
    const uploadsDir = path.join(process.cwd(), 'public', 'images')
    // 生成唯一文件名
    const extension = meal.image.name.split('.').pop()
    const fileName = `${meal.slug}.${extension}`
    let imagePath = `/images/${fileName}`;

    // 将文件写入public目录
    const fileData = await meal.image.arrayBuffer()
    await fs.writeFile(
        path.join(uploadsDir, fileName),
        Buffer.from(fileData)
    );
    return imagePath
}