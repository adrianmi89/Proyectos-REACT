import {getUser} from "../../base/05-funciones";

describe("Pruebas en funciones",() => {

    test("getUser debe retornar un objeto",() => {

        const userTest = {
        
            uid:"ABC123",
            username:"Adrianmi"
        }
    
        const user = getUser();
    
        console.log(user);
        console.log(userTest);
        
        expect(user).toEqual(userTest);
    })
})