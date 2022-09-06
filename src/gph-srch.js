import { printRandom, printSearch, printTrending } from "./index.js";
import { printError } from "./index.js";

export function errorParse(){ 
	const response = JSON.parse(this.responseText);
	if (this.status === 200){
		printElements(response, query);
	} else {
		printError(this, response, query);
	}
}

export function getTrendingGiphy(){
	let trendingRequest = new XMLHttpRequest();
	const trendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=10&rating=g`

	trendingRequest.addEventListener("loadend", function(){
		const response = JSON.parse(this.responseText);
	if (this.status === 200){
		printTrending(response, query);
	} else {
		printError(this, response, query);
	}
	});
	
	trendingRequest.open("GET", trendingURL, true);
	trendingRequest.send();
}

export function getRandomGiphy(){
	let randomRequest = new XMLHttpRequest();
	const randomURL = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=g`

	randomRequest.addEventListener("loadend", function(){
		const response = JSON.parse(this.responseText);
	if (this.status === 200){
		printRandom(response, query);
	} else {
		printError(this, response, query);
	}
	});

	randomRequest.open("GET", randomURL, true);
	randomRequest.send();
}

export function getSearchGiphy(query){
	let searchRequest = new XMLHttpRequest();
	const searchURL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;

	request.addEventListener("loadend", function(){
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



