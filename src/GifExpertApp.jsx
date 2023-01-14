import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Componente Input */}

            {/* Listado de Gif's */}
            <AddCategory onNewCategory={event => onAddCategory(event)}></AddCategory>
            <ol>
                {
                    categories.map((category) => { return (<GifGrid key={category + Math.random()} category={category} />) })
                }
            </ol>
            {/* Gif Item */}
        </>
    );
}