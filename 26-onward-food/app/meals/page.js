import classes from "./page.module.css";
import Link from "next/link";

export default function MealsPage() {
    return <>
        <header className={classes.header}>
            <h1>Deliciuos meals create{' '}
                <span className={classes.highlight}>by you</span>
            </h1>
            <p>
                Choose your favorite meal and enjoy it!
            </p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share your favorite meal
                </Link>
            </p>
        </header>
        <main className={classes.main}>

        </main>
    </>
}