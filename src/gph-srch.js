import { printElements } from "./index.js";
import { printError } from "./index.js";

export function getTrendingGiphy(){
	let trendingRequest = new XMLHttpRequest();
	const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=10&rating=g`
}

export function getRandomGiphy(){
	let randomRequest = new XMLHttpRequest();
	const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=g`
}

export function getSearchGiphy(query){
	let searchRequest = new XMLHttpRequest();
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;

	request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
		if (this.status === 200){
			printElements(response, query);
		} else {
			printError(this, response, query);
		}
  })

	searchRequest.open("GET", url, true);
	searchRequest.send();
}



