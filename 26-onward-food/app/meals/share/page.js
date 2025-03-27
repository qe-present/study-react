import { Suspense } from 'react';
import Link from 'next/link';
import classes from './page.module.css';
import MealsFormSubmit from './meals-form-submit';
import ImagePicker from '@/components/meals/image-picker';
import { shareMeal } from './actions';

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          分享你的 <span className={classes.highlight}>美食菜谱</span>
        </h1>
        <p>在这里分享你最喜欢的菜肴，或者任何你觉得值得分享的美食！</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">你的名字</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">你的邮箱</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">菜品名称</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">简短描述</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">详细烹饪步骤</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              placeholder="需要的食材:
- 食材1
- 食材2
- 食材3

烹饪步骤:
1. 第一步
2. 第二步
3. 第三步"
              required
            ></textarea>
          </p>
          <ImagePicker label="美食图片" name="image" />
          <p className={classes.actions}>
            <Link href="/meals" className={classes.buttonAlt}>
              取消
            </Link>
            <Suspense fallback={<p className={classes.submitting}>提交中...</p>}>
              <MealsFormSubmit />
            </Suspense>
          </p>
        </form>
      </main>
    </>
  );
}
