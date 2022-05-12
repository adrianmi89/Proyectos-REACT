import {getImagen} from "../../base/11-async-await";

describe("Pruebas con async-await y Fetch",() => {
    
    test("Debe de retornar el URL de la imagen",async() => {

        const URL = await getImagen();
        console.log(URL);

        expect(URL.includes("https://")).toBe("true");
    })
})