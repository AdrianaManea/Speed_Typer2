const randomQuoteAPIUrl = `http://api.quotable.io/random`;

function getRandomQuote() {
  return fetch(randomQuoteAPIUrl)
    .then(response => response.json())
    .then(data => data.content);
}

async function getNextQuote() {
  const quote = await getRandomQuote();
  console.log(quote);

}

getNextQuote();