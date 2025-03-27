import turso from "@/utils/connext";
export const getMeals = async () => {
    const meals = await turso.execute("SELECT * FROM meals");
    return meals.rows;
}
export const getMeal = async (slug) => {
    const meal = await turso.execute("SELECT * FROM meals WHERE slug=?" , [slug]);
    console.log(meal.rows);
    return meal.rows[0];
}