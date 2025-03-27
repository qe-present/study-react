import classes from './page.module.css';

export default function ShareMealLoading() {
  return (
    <div className={classes.loading}>
      <div className={classes.spinner}></div>
      <p>正在加载分享表单...</p>
    </div>
  );
} 