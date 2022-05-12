import React from "react";//Para que nos reconozca el jsx
import ReactDOM from "react-dom";//Para que lo añada al html
//import PrimeraApp from "./PrimeraApp";//Añadiendo la función Componente de otro fichero
import CounterApp from "./CounterApp";
import "./index.css";

const saludo = <h1>Hola Mundo!</h1>;
console.log(saludo);

//Una forma de renderizar al DOM:
const divRoot = document.querySelector("#root");
/*console.log(divRoot);

ReactDOM.render(saludo,divRoot);
*/
//De otra forma:
ReactDOM.render(<CounterApp value ={100} />,divRoot);