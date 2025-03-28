import turso from "@/utils/connext";
export const getMeals = async () => {
    const meals = await turso.execute("SELECT * FROM meals");
    return meals.rows;
}
export const getMeal = async (slug) => {
    const meal = await turso.execute("SELECT * FROM meals WHERE slug=?" , [slug]);
    return meal.rows[0];
}
export const addMeal = async (meal) => {

    await turso.execute(
        'INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [meal.title, meal.summary, meal.instructions, meal.creator, meal.creator_email, meal.image, meal.slug]
    );
    return true
}