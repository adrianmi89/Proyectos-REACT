
//import {render} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import {shallow} from "enzyme";//El shallow muy parecido al render pero con algunas ventajas
import PrimeraApp from "../../PrimeraApp";

describe("Pruebas con la PrimeraApp",() => {
    /*
    test("Debe de mostrar el mensaje 'Hola, me llamo Link'",(done) => {

       const saludo = "me llamo link.";
       const {getByText} = render(<PrimeraApp persona={saludo} />);//Función del objeto wrapper

       expect (getByText(saludo)).toBeInTheDocument();

       done();
    })
    */
    test("Debe de mostrar <PrimeraApp /> correctamente",() => {
        
        const saludo = "Me llamo Link";
        console.log(saludo);
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    })
    test("Debe de mostrar el subtítulo enviado por props",() => {
        
        const saludo = "Me llamó Link";
        const subtitulo = "Zona para los subtítulos";
        const historia = "Soy el personaje principal. Un héroe de la saga Zelda que despertó para poder proteger a la princesa.";
        
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>);
        
        const textoParrafo = wrapper.find("p").text();//Extraemos de la etiqueta lo que nos interese
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo);
        //expect(wrapper).toMatchSnapshot();
    })
})