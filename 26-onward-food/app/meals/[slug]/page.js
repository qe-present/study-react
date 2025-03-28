import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import classes from './page.module.css';
import { getMeal } from "@/utils/meals";
export async function generateMetadata({ params }) {
    const { slug } = params;
    const meal = await getMeal(slug);
    if(!meal){
        notFound()
    }
    return {
        title: meal.title,
        description: meal.summary
    };
}
export default async function MealDetailPage({ params }) {
    const { slug } = params;
    
    // 获取美食详情数据
    const meal = await getMeal(slug);
    
    // 如果找不到对应的美食，显示404页面
    if (!meal) {
        notFound();
    }
    
    // 格式化步骤内容，将换行符转换为<br/>标签
    const instructions = meal.instructions.replace(/\n/g, '<br/>');
    
    // 提取食材列表（假设食材在instructions前，用"需要的食材:"标记）
    const ingredientsMatch = meal.instructions.match(/需要的食材:([\s\S]*?)(?=烹饪步骤:|$)/i);
    const ingredientsList = ingredientsMatch 
        ? ingredientsMatch[1].trim().split('\n').filter(item => item.trim())
        : [];
        
    // 估计准备和烹饪时间（模拟数据）
    const prepTime = Math.floor(Math.random() * 20) + 10; // 10-30分钟
    const cookTime = Math.floor(Math.random() * 30) + 15; // 15-45分钟
    
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image 
                        src={meal.image} 
                        alt={meal.title}
                        fill
                        priority
                    />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>
                        {meal.summary}
                    </p>
                    
                    <div className={classes.meta}>
                        <div className={classes.metaItem}>
                            <span className={classes.metaIcon}>⏱️</span>
                            <span>准备时间: {prepTime} 分钟</span>
                        </div>
                        <div className={classes.metaItem}>
                            <span className={classes.metaIcon}>🔥</span>
                            <span>烹饪时间: {cookTime} 分钟</span>
                        </div>
                        <div className={classes.metaItem}>
                            <span className={classes.metaIcon}>👨‍🍳</span>
                            <span>难度: {['简单', '中等', '复杂'][Math.floor(Math.random() * 3)]}</span>
                        </div>
                    </div>
                </div>
            </header>
            
            <main>
                {ingredientsList.length > 0 && (
                    <div className={`${classes.instructions} ${classes.ingredients}`}>
                        <h2>食材</h2>
                        <ul>
                            {ingredientsList.map((ingredient, index) => (
                                <li key={index}>{ingredient.trim()}</li>
                            ))}
                        </ul>
                    </div>
                )}
                
                <div 
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: instructions
                    }} 
                />
                
                <div className={classes.actions}>
                    <Link href="/meals" className={classes.button}>
                        ← 返回美食列表
                    </Link>
                </div>
            </main>
        </>
    );
}