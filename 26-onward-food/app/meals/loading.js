import classes from "./loading.module.css";

export default function Loading(){
    return (
        <div className={classes.loading}>
            <div className={classes.spinner}></div>
            <p>正在加载美食内容...</p>
        </div>
    )
}