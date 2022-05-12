
import {getHeroeByIdAsync} from "../../base/09-promesas";
import { heroes } from "../../data/heroes";

describe("Pruebas con Promesas",() => {
    
    test("getHeroeByIdAsync debe de retornar un Héroe async", (done) => {
        const id=1;

        getHeroeByIdAsync(id)
        .then(heroe => {

            expect(heroe).toBe(heroes[0]);
            done();//Llamar al done para indicar que ya terminamos el proceso
        })
    });    
})
  
