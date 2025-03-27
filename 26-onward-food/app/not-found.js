import Link from 'next/link';
import classes from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={`not-found ${classes.container}`}>
      <div className={classes.emoji}>🍽️</div>
      <h1>404</h1>
      <div className={classes.divider}></div>
      <p>页面未找到</p>
      <p>
        很抱歉，您访问的美食页面不存在或已被移除。
      </p>
      <p>
        <Link 
          href="/" 
          style={{
            color: '#f9572a',
            textDecoration: 'underline',
            fontWeight: 'bold'
          }}
        >
          返回美食首页
        </Link>
      </p>
    </div>
  );
} 