import React from "react";
import PropTypes from "prop-types";//Importando el prototipado

//Añadimos propiedades a la función
const PrimeraApp = ( {persona} ) => {

    const saludo = "Hola Mundo, ";
    const subtitulo = "Zona para los subtítulos";
    const numerosSeparados = [1,2,3,4,5,6];
    const imprimeObjeto = {
        nombre:"Adrian",
        Apellidos:"Martínez Insua",
        Edad:33,
        Estudios:"Desarrollador de Aplicaciones Web"
    }

    return (
        <>
            <h1>{saludo}{persona}</h1>
            <h2>Mi primera Aplicación con React</h2>
            <h2>Esta cadena es un Array numérico: {numerosSeparados}</h2>
            <h2>Imprimiendo un Objecto:</h2><pre>{JSON.stringify(imprimeObjeto, null, 3)}</pre>
            <p>{subtitulo}</p>
        </>
        //Si no queremos añadir divs vacíos tenemos la opción de usar Fragment. Los podremos
        //importar o no, usando la etiqueta <Fragment> o <> respectivamente.
    );
}
//Definiendo el saludo como PropTypes para forzar a que tenga una formato específico
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: "Zona para los subtítulos"
}

export default PrimeraApp;