"use client"

import { useFormStatus } from "react-dom"
import classes from "./meal-form-submit.module.css"
export default function MealFormSubmit({ children, ...prop }) {

    const { pending } = useFormStatus();


    return (
        <p className={classes.actions}>
            <button {...prop} disabled={pending}>{pending ? "Submitting..." : children}</button>
        </p>
    )
}