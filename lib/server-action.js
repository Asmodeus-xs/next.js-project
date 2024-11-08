"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
    return !text || text.trim() === ""
}

export async function shareMeal(prevState, formData) {
    const meal = Object.fromEntries(formData)
    console.log(meal)
    if (isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes("@") ||
        !meal.image || meal.image.size === 0) {
        return {
            message: "Invalid input"
        }
    }

    await saveMeal(meal)
    revalidatePath("/meals")
    redirect("/meals")

}