import {getHeroesById, getHeroesByOwner} from "../../base/08-imp-exp";
import {heroes} from "../../data/heroes";

describe("Pruebas en funciones de Héroes",() => {

    test("getHeroesId debe retornar un héroe por ID",() => {

        const id = 1;
    
        const heroe = getHeroesById(id);
    
        console.log(heroe);
        
        const heroeData = heroes.find( h => h.id === id);
 
        expect(heroe).toBe(heroeData);
    })
    test("Debe retornar un undefined si Héroe no existe",() => {

        const id = 10;
    
        const heroe = getHeroesById(id);
    
        expect(heroe).toBe(undefined);
    })
    test("getHeroesOwner debe ser un array con los héroes de DC",() => {

        const owner = "DC";
    
        const heroes = getHeroesByOwner(owner);
    
        console.log(owner);
        
        const heroesData = heroes.filter( h => h.owner === owner);
 
        expect(heroes).toEqual(heroesData);
    })
    test("getHeroesOwner debe ser un array con los héroes de Marvel que especifiquemos en el parámetro",() => {

        const owner = "Marvel";
    
        const heroes = getHeroesByOwner(owner);
    
        console.log(owner);
        
        const heroesData = heroes.filter( h => h.owner === owner);
 
        expect(heroes.length).toBe(2);//Solo los dos primeros
    })
})