import Image from 'next/image'
import classes from './page.module.css'
import { getMeal, getMeals } from '@/lib/meals'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {

    const meal = getMeal(params.mealSlug)

    if (!meal) {
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary
    }
}

export async function generateStaticParams() {

    const meals = await getMeals()
    const paths = meals.map(item => ({ mealSlug: item.slug }))

    console.log(paths)

    return paths
}


export default function MealsDetailsPage({ params }) {

    const meal = getMeal(params.mealSlug)

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, "<br/>")

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={`/next-app/${meal.image}`} alt='meal image' fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions
                    }}></p>
            </main>
        </>
    )
}