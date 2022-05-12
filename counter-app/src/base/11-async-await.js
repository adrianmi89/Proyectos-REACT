
export const getImagen = async() => {
    
    try{
        const apiKey = "tIELLZaSLvGLD3cDmEFLvvN7jaDN2IOu";
        const resp = await fetch("http://api.giphy.com/v1/gifs/random?api_key=${apikey}");
        const {data} = await resp.json();

        const {url} = data.images.original;

        return url;
        
    }
    catch(error){

        console.error(error);
    }
}