const quoteText = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.querySelector(".new-quote");
let allQuotes = [];

const fetchQuotes = async () => {
    const res = await fetch("https://type.fit/api/quotes");
    allQuotes = await res.json();
    oneQuote();
}

const oneQuote = () => {
    let randomNum = Math.floor(Math.random() * allQuotes.length);
    let quote = allQuotes[randomNum];
    quoteText.textContent = quote.text;
    author.textContent = quote.author;
}

btn.addEventListener("click", oneQuote);

fetchQuotes();