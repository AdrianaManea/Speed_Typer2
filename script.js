const randomQuoteAPIUrl = `http://api.quotable.io/random`;
const quoteDisplayEl = document.getElementById('quote-display');
const quoteInputEl = document.getElementById('quote-input');
const timerEl = document.getElementById('timer');


// Check to see if character correct
quoteInputEl.addEventListener('input', () => {
  // console.log('changed');

  // Get all span's in out quoteDisplayEl
  const arrayQuote = quoteDisplayEl.querySelectorAll('span');

  // Convert our string to an array of each individual character
  const arrayValue = quoteInputEl.value.split('');

  // Default assume everything is correct
  let correct = true;

  // Loop through arrayQuote
  arrayQuote.forEach((characterSpan, index) => {
    // Get character from value
    // It allows us to match up the characters
    const character = arrayValue[index];

    // Check to see if character null
    // Check to see if character === with characterSpan.innerText
    if (character == null) {
      characterSpan.classList.remove('incorrect');
      characterSpan.classList.remove('correct');
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct');
      characterSpan.classList.remove('incorrect');
    } else {
      characterSpan.classList.add('incorrect');
      characterSpan.classList.remove('correct');
      correct = false;
    }
  });

  if (correct) renderNextQuote();
});


// Get random quote
function getRandomQuote() {
  return fetch(randomQuoteAPIUrl)
    .then(response => response.json())
    .then(data => data.content);
}


// Render next quote
async function renderNextQuote() {
  const quote = await getRandomQuote();
  // console.log(quote);

  // Display quote
  quoteDisplayEl.innerHTML = '';

  // Get individual element for each character of our quote
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span');
    // characterSpan.classList.add('incorrect'); // Test
    characterSpan.innerText = character;
    quoteDisplayEl.appendChild(characterSpan);
  });

  // Clear out input
  quoteInputEl.value = null;

  // Start Timer
  startTimer();
}


// Timer
let startTime;

function startTimer() {
  // Start at 0
  timerEl.innerText = 0;

  // Current time
  startTime = new Date();

  setInterval(() => {
    // Set the text to our timer
    timerEl.innerText = getTimerTime() + 's';
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

renderNextQuote();