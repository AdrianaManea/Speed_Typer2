Speed Typer2

Resources:
API: 'http://api.quotable.io/random'
Source: 'https://www.youtube.com/watch?v=R-7eQIHRszQ'

What we practice:
DOM Manipulation
API Call's
Timers

What we have:
Timer counting up in seconds
An area we're we can enter the text that we're getting from out API
It will tell us if we are right or wrong
If we're correct it will move onto the next quote for us

JS - How it's done:

- Get random quote

- Render next quote

  - Display quote to a blank string
  - Clear out input
  - We change the color of each individual color based on weather or not the letter was correct or incorect:
    - We need an individual element for each character of our quote, to do this we need to go through a loop
    - quote.split('') - we can say what we want to split on. Pass in empty string it's going to convert our string to an array where each individual character is one element in that array
    - .forEach() - loop over that array, where we can do something for each one of these characters
      - const characterSpan = document.createElement('span')
      - characterSpan.innerText = character - take the span and set it equal to character
      - Esentially what we're doing is, getting each individual character in our string, create in a span for it and then setting that text to that span to that individual character
      - quoteDisplayEl.appendChild(characterSpan) - append a child of characterSpan to quoteDisplayEl

- Check to see if character correct - eventListener on quoteInputEl

  - Loop over all of the different characters in quote, our array, all our different spans and we want to compare each individual character to the individual character in the input based on their position
  - If they're the same we add the correct class and if different we add the incorrect class
  - We add the class gradually while we type
  - Check to see if character null / if character === with characterSpan.innerText
  - When getting to the point of typing everything correctly, move onto the next quote
    - By default we assume everything is correct / let correct = true;
    - So every time something is incorrect we want to change / correct = false;
    - The if we do have everything correct then renderNextQuote()

- Timer

  - everytime we renderNextQuote() we want to startTimer()
  - startTimer()
    - set timer to 0, start at 0
    - compare start date with current date to get the actual time elapsed
      - every single second we want to update our timer - setInterval(() => {}, setInterval), but it's not 100% accurate therefore we need to use a start date then compare our start date to our current date to get the actual time that's elapsed
      - get current time - startTime = new Date();
      - call a function getTimerTime()

- getTimerTime()
  - get a new Date(), subtract it from startTime which gives us milisec
  - to convert it to seconds we devide all of it by 1000, but it might be a decimal
  - so in order to make it an integer - Math.floor() - rounds down
    set the text to our timer
  - return all of this
  - set the text to our timer
