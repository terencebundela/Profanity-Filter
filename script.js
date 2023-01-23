const filteredText = document.querySelector(".filtered-text");
const button = document.getElementsByTagName("button");
const btn = document.querySelector('.btn');
const getText = document.querySelector('.getText');
let words = document.getElementById("words");

// Profanity Filter Host and Key
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e53afc07c3msh81aee51efbd4478p127da5jsn367377a143a7",
    "X-RapidAPI-Host": "community-purgomalum.p.rapidapi.com",
  },
};

// Profanity Filter function with Rapid API Authentication
function filter() {
    
    const text = getText.value;
    if(words.value != "") {
        words.value = '';
    }
    
  fetch(
    `https://community-purgomalum.p.rapidapi.com/json?text=${text}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        filteredText.innerHTML = response.result;
    })
    .catch((err) => console.error(err));
    
}
// Trigger enter key with click event
words.addEventListener('keydown', e => {
    if(e.key === "Enter") {
        e.preventDefault();
        btn.click();
    }
})
