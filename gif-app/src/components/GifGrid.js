import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import {useState, useEffect} from "react";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {
    
    const {data:images,loading} = useFetchGifs(category);

    console.log(loading);

    return(
        <>
        {loading && <span className="animate__animated animate__flash">loading</span>}

        <div className="card-grid">
            <ol>
            <h2 className="animate__animated animate__backInLeft__repeat-2">{category}</h2>
                {
                    images.map( img => (
                        <GifGridItem key={img.id} {...img}/>
                    ))
                }
            </ol>
        </div>
        </>
    )
    
    //VOLVER RECARGAR LAS IMAGENES
    //<button onClick={() => setCount(count + 1)}>Cargar Imagenes de nuevo</button>

    //MOSTRAR EL TITULO DE LOS GIFS
    //<li key={img.id}>{img.title}</li>
}