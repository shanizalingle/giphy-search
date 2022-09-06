export function getGiphy(query){
	let request = new XMLHttpRequest();
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_Key}&q=${query}&limit=25&offset=0&rating=g&lang=en`;

	
}

