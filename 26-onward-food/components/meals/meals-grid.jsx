// 导入css
import classes from "./meals-grid.module.css";
export default function MealsGrid({meals}){
    return(
        <>
        <ul className={classes.meals}>
            {
                meals.map(meal => (
                    <li key={meal.id}>
                        <div className={classes.meal}>
                            <img src={meal.image} alt={meal.title} />
                            <h3>{meal.title}</h3>
                            <p>{meal.description}</p>
                            <span>{meal.price}</span>
                        </div>
                    </li>
                ))
            }
        </ul>
        </>
    )
}