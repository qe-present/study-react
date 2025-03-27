'use client';

import classes from './error.module.css';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // 记录错误到应用监控或日志系统
    console.error('美食页面错误:', error);
  }, [error]);

  return (
    <div className={classes.error}>
      <div className={classes.icon}>⚠️</div>
      <h2 className={classes.title}>发生错误</h2>
      <p className={classes.message}>
        加载美食信息时遇到问题，请稍后再试。
      </p>
      <button 
        onClick={() => reset()}
        className={classes.button}
      >
        重试
      </button>
    </div>
  );
}