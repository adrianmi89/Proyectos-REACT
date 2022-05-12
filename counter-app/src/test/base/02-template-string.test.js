import "@testing-library/jest-dom";//Esta librería tiene todas las funciones de testing
import { getSaludo } from "../../base/02-template-string";
describe ("Pruebas en este archivo",() => {
    
    test("getSaludo debe de retornar, Hola Adrián Martínez Insua", () => {
        
        const nombreCompleto = "Adrián Martínez Insua";

        const saludo = getSaludo(nombreCompleto);
       
        expect(saludo).toBe("Hola " + nombreCompleto);
    })
    //getSaludo debe devolver Hola Adrián si no hay argumento nombre
    test("getSaludo debe de retornar Hola Carlos! si no hay argumento nombre",() => {

        const saludo = getSaludo();
        expect(saludo).toBe("Hola Carlos!");
    })
    
})