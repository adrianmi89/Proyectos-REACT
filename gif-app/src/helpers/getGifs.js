

export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=tIELLZaSLvGLD3cDmEFLvvN7jaDN2IOu`;
    const respuesta = await fetch(url);
    const {data} =  await respuesta.json();

    const gifs = data.map(img => {

        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }//La interrogación es para asegurarnos que haya imágenes
    })

    return gifs;
}