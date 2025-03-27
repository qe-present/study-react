import classes from './page.module.css';

export default function LoadingMealDetails() {
  return (
    <div className={classes.loading}>
      <p>正在加载美食详情...</p>
    </div>
  );
} 