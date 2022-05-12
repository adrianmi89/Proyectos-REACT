//Los Hooks siempe empiezan por la 'use' y son funciones predefinidas propias de React. La diferencias con
//las funciones componente es que estos pueden tener un estado.

import { useState, useEffect} from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    })
    console.log("Cargando...");
    useEffect(() => {
        
        getGifs(category)
        .then (imgs =>{
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                });
            }, 3000);
        })
    },[category])//Para evitar volver cargar la página. Solo si la categoria cambia haremos la petición

    /*setTimeout(() => {

        setState({
            data: [1,2,3,4,5,6,7],
            loading: false
        })
    }, 3000);
    */
    return state;
}