'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import classes from '../error.module.css';

export default function ShareMealError({ error, reset }) {
  useEffect(() => {
    console.error('分享美食表单错误:', error);
  }, [error]);

  return (
    <div className={classes.error}>
      <div className={classes.icon}>⚠️</div>
      <h2 className={classes.title}>提交失败</h2>
      <p className={classes.message}>
        {error.message || '分享美食时出现问题，请检查您的输入并重试。'}
      </p>
      <div className={classes.actions}>
        <button onClick={reset} className={classes.button}>
          重试
        </button>
        <Link href="/meals" className={classes.button}>
          返回美食列表
        </Link>
      </div>
    </div>
  );
} 