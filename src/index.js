import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getSearchGiphy } from "./gph-srch.js";
import { getRandomGiphy } from './gph-srch.js';
import { getTrendingGiphy } from './gph-srch.js';

export function printSearch(apiResponse, query){
	const giphyResult = document.getElementById("giphy-result");
	document.getElementById("giphy-result").innerHTML = null;
	const queryDisplay = document.createElement("h2");
	queryDisplay.append(query);
	giphyResult.append(queryDisplay);
  
	for (let i=0; i < apiResponse.data.length; i++){
		let gifResult = apiResponse.data[i].images.fixed_height.url;
    let newImg = document.createElement("img");
    newImg.setAttribute("src", gifResult);
    giphyResult.append(newImg);
	}
}

export function printError(request, apiResponse, query){
	const giphyResult = document.getElementById("giphy-result");
	document.getElementById("giphy-result").innerHTML = null;
	const queryDisplay = document.createElement("h2");
	queryDisplay.append(`${query} was unable to display due to the following error: ${request.status} ${request.statusText}: ${apiResponse.message}`);
	giphyResult.append(queryDisplay);
}

function formSubmit(event){
	event.preventDefault();
	const query = document.getElementById("gif-search").value;
	document.querySelector("#gif-search").value = null;
	getGiphy(query); 
}

window.addEventListener("load", function(){
	document.querySelector('form').addEventListener("submit", formSubmit);
})