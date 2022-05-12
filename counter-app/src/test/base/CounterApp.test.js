//Tarea
/*
 1. Se debe de mostrar el programa correctamente haciendo match con un snapshot y
    sus valores por defecto.
 2. Se debe de mostrar el valor por defecto de 100. Usar el wrapper.find, tomando
    el elemento HTML donde se muestra el valor del contador. 
*/
import React from "react";
import "@testing-library/jest-dom";
import {shallow} from "enzyme";//El shallow muy parecido al render pero con algunas ventajas
import CounterApp from "../../CounterApp";

describe("Pruebas con el CounterApp",() => {
    /*
    test("Debe de mostrar el mensaje 'Hola, me llamo Link'",(done) => {

       const saludo = "me llamo link.";
       const {getByText} = render(<PrimeraApp persona={saludo} />);//Función del objeto wrapper

       expect (getByText(saludo)).toBeInTheDocument();

       done();
    })
    */
        const contador = 100;
        let wrapper = shallow(<CounterApp />);

        beforeEach(() => {
            
            wrapper = shallow(<CounterApp />);
        })
    test("Debe de mostrar <CounterApp /> correctamente haciendo un Snapshot y con el valor 100",() => {
        
        const wrapper = shallow(<CounterApp value={contador}/>);
        const nVisitas = wrapper.find("h2").text();

        console.log(nVisitas);

        expect(wrapper).toMatchSnapshot();
    })
    test("Debe de mostrar el valor por defecto del CounterApp",() => {
        
        const contador = 100;
        const wrapper = shallow(<CounterApp value={contador}/>);
        const nVisitas = wrapper.find("h2").text().trim();//Para quitarle los posibles espacios

        expect(nVisitas).toBe("100");
    })
    test("Debe de incrementar el contador a +1",() => {
        
        const wrapper = shallow(<CounterApp value = {contador}/>);

        const mas = wrapper.find("button").at(0).simulate("click");
        const nVisitas = wrapper.find("h2").text().trim();

        expect(nVisitas).toBe("101");
        console.log(mas.html());//Todas las propiedades en forma de función
        console.log(nVisitas);
    })
    test("Debe de decrementar el contador a -1",() => {
        
        const wrapper = shallow(<CounterApp value = {contador}/>);

        const menos = wrapper.find("button").at(1).simulate("click");
        const nVisitas = wrapper.find("h2").text().trim();

        expect(nVisitas).toBe("99");
        console.log(menos.html());//Todas las propiedades en forma de función
        console.log(nVisitas);
    })
    test("Debe de colocar el valor por defecto con botón reset",() => {
        
        const wrapper = shallow(<CounterApp value = {contador}/>);

        const reset = wrapper.find("button").at(2).simulate("click");
        const nVisitas = wrapper.find("h2").text().trim();

        expect(nVisitas).toBe("0");
        console.log(reset.html());//Todas las propiedades en forma de función
        console.log(nVisitas);
    })
})