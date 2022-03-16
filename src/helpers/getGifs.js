export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=zC7dgrg6d4LjCpRUYuh4H04jxAvbsMqj`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url,
        }
    })
    console.log(gifs);
    return gifs;
}

