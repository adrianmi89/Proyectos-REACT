import React,{useState} from "react";
import PropTypes from "prop-types";

//Las funciones de eventos por defecto reciben un argumento
//Se puede poner la función entera en el atributo u poner solo la referencia a la misma
const CounterApp = ({value}) => {
    
    const [ counter, setCounter ] = useState(value);//El useState siempre va tener un array

    const handleAdd = function(e) {

        setCounter( counter+1 );
    }
    const handleDelete = function(e) {

        setCounter( counter-1 );
    }
    const handleReset = function(e) {

        setCounter( counter=>0 );
    }
    return (
        <>
        <h1>CounterApp</h1>
        <h2> {counter} </h2>

        <button onClick={ handleAdd }>+</button>
        <button onClick={ handleDelete }>-</button>
        <button onClick={ handleReset }>Borrar</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
