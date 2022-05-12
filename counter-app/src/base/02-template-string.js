
const nombre = "Adrián";
const apellido = "Martínez Insua";

//const nombreCompleto = nombre+" "+apellido;

export const getSaludo = (nombreCompleto) => {

    if(nombreCompleto){
        return "Hola "+nombreCompleto;
    }
    else{
        return "Hola Carlos!";
    } 
}
