import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifExpertApp = () => { 
    
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <div>
            <h2 className="animate__animated animate__bounce">GifExpertApp</h2>
            <div className="animate__animated animate__bounceInDown">Example</div>
            <hr />
            <AddCategory setCategories={ setCategories }/> 
            <ol>
            {
                categories.map( (category) => {
                    console.log(category);
                    return <GifGrid key={category} category={category} />
                })
            }
            </ol>
        </div>
    )
}