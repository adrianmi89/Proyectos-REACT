import React, {useState} from "react";
import { Fragment } from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifApp = () => {
    //const categories = ["Mario 64","Zelda","Dragon Ball"];

    //Agregamos categorias al array dinámicamente desde un botón
    const [categories,setCategories] = useState(["Zelda"]);

    const handleAdd = () => {
        
        //setCategories([...categories,"Peter Pan"]);<-Una forma de hacerlo sin recibir argumento
        //setCategories(anadir => [...categories,"Peter Pan"]);
    }
    console.log(categories);
    return (
        <Fragment>
            <h2>GifApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {//Función para mostrar los elementos de un array
                    categories.map(category => 

                    <GifGrid key={category} category={category}/>
                    )
                    
                }
            </ol>
        </Fragment>
    );
}
/*categories.map(category => {

    return <li key={category}>{category}</li>
})*/