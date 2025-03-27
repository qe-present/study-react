export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, '-') // 支持中文和英文
    .replace(/^-+|-+$/g, '')
    .concat('-', Date.now().toString()); // 添加时间戳确保唯一性
} 