const link = "https://api.quotable.io/random";
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuote = document.querySelector(".new-quote");
const copy = document.querySelector("#copy");
const twitter = document.querySelector("#twitter");

const getQuote = async (link) =>{
    try{
        const response = await fetch(link);
        let data = await response.json();
        console.log(data);
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    } catch(error){
        console.log(error);
    }
}

newQuote.addEventListener("click", ()=>{
    getQuote(link);
})

copy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quote.innerHTML);
})

twitter.addEventListener("click", ()=>{
    const twitterLink = `https://twitter.com/intent/tweet?url=${quote.innerHTML}`;
    window.open(twitterLink);
})

getQuote(link);

