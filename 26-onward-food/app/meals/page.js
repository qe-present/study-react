import classes from "./page.module.css";
import Link from "next/link";
import MealGrid from "@/components/meals/meal-grid";
import {Suspense} from "react";
import {getMeals} from "@/utils/meals";
import Loading from "./loading";

async function Meals() {
    const meals = await getMeals();
    return <MealGrid meals={meals}></MealGrid>

}

export default async function MealsPage() {
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
            <Suspense fallback={<Loading />}>
                <Meals/>
            </Suspense>
        </main>
    </>
}
export const dynamicParams = true;