import { printRandom} from "./index.js";
import { printTrending } from "./index.js";
import { printSearch } from "./index.js";
import { printError } from "./index.js";


export function getTrendingGiphy(){
	let trendingRequest = new XMLHttpRequest();
	const trendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=P9L5r8zyDwrySaO0tjCla06Q2ec7Npqp&limit=12&rating=g`

	trendingRequest.addEventListener("loadend", function(){
		const response = JSON.parse(this.responseText);
	if (this.status === 200){
		printTrending(response);
	}
	});
	
	trendingRequest.open("GET", trendingURL, true);
	trendingRequest.send();
}

export function getRandomGiphy(){
	let randomRequest = new XMLHttpRequest();
	const randomURL = `https://api.giphy.com/v1/gifs/random?api_key=P9L5r8zyDwrySaO0tjCla06Q2ec7Npqp&tag=&rating=g`

	randomRequest.addEventListener("loadend", function(){
			const response = JSON.parse(this.responseText);
		if (this.status === 200){
			printRandom(response);
		} 
	});

	randomRequest.open("GET", randomURL, true);
	randomRequest.send();
}

export function getSearchGiphy(query){
	let searchRequest = new XMLHttpRequest();
	const searchURL = `https://api.giphy.com/v1/gifs/search?api_key=P9L5r8zyDwrySaO0tjCla06Q2ec7Npqp&q=${query}&limit=15&offset=0&rating=g&lang=en`;

	searchRequest.addEventListener("loadend", function(){
			const response = JSON.parse(this.responseText);
		if (this.status === 200){
			printSearch(response, query);
		} else {
			printError(this, response, query);
		}
	});

	searchRequest.open("GET", searchURL, true);
	searchRequest.send();
}



