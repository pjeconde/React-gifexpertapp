import React, { useEffect } from "react";
import GifGridItem from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( {category} ) => {
    
    //const [count, setCount] = useState(0);
    /* const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs(category).then(imgs => setImages(imgs));
    }, [ category ]) 
 */
    const {data:images, loading} = useFetchGifs(category);
        
    return (
            <div>
            <h3>{category}</h3>
            <br/> 
            {loading ? 'Cargando...' : null}
                <div className="card-grid">
                    {
                        images.map(img => (
                            <GifGridItem key={img.id} {...img} />
                        ))
                    }
                </div>
            </div>
       )
}