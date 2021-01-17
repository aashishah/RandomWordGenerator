const body = document.querySelector("body");
const genWord = document.querySelector(".genw")
const defnSpace = document.querySelector(".defn")
const APIkey = "92b104b2-9578-4d85-be7b-93f4c5631592"
const randomWord = () => {
	fetch('https://random-word-api.herokuapp.com/word?number=1')
		.then(response =>{
			return response.json();
		})
		.then(response =>{
			genWord.textContent = response[0]
			getDefinition(response[0]);
		})
		.catch(err =>{
			console.log(err);
		})

	}

const getDefinition = (word) => {
	fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${APIkey}`)
		.then(response =>{
			return response.json();
		})
		.then(response =>{
			defnSpace.textContent = response[0].shortdef[0]
		})
		.catch(err =>{
			console.log(err);
		})
}


const button = document.querySelector(".btn");
button.addEventListener('click', function(){
	randomWord();
})






