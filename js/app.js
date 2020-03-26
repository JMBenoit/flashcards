function $(value)
{
  return document.getElementById(value);
}

//sets var to match local storage and set dark mode if necessary
let darkModeOn = (localStorage.getItem('darkMode') == 'true');
if (darkModeOn) {
  setDarkMode();
}


function setLightMode()
{
  $('body').style.color = 'black';
  $('body').style.background = 'white';
  $('body').style.color = 'black';
  $('question').style.color = 'black';
  $('answer').style.color = 'black';
  $('question').style.background = 'white';
  $('answer').style.background = 'white';
  $('newCardContainer').style.border = '5px solid black';
}

function setDarkMode()
{
  $('body').style.color = 'white';
  $('body').style.background = 'black';
  $('body').style.color = 'white';
  $('question').style.color = 'white';
  $('answer').style.color = 'white';
  $('question').style.background = 'black';
  $('answer').style.background = 'black';
  $('newCardContainer').style.border = '5px solid white';
}

function addButtonToggles()
{
  //gets all flashcards from DOM
  let flashcards = document.getElementsByClassName('flashcard');
  //select the last flashcard
  let lastCard = flashcards[flashcards.length - 1];
  //selects the p/answer from the last flashcard
  let lastCardP = lastCard.getElementsByTagName('p')[0];
  //selects the "show/hide answer" button. add EL that toggles the answer viewable when clicked
  let lastCardShowButton = lastCard.getElementsByTagName('button')[0];
  lastCardShowButton.addEventListener('click', function(){
    lastCardP.classList.toggle('hide');
  });
  //selects the "i know it" button. add EL that hides the flashcard when clicked
  let lastCardKnowButton = lastCard.getElementsByTagName('button')[1];
  lastCardKnowButton.addEventListener('click', function(){
    lastCard.classList.add('fade-out');
    setTimeout(function(){
      lastCard.classList.add('hide');
    }, 800);
  });
}


$('add').addEventListener('click', function(){
  //pulls the input from the "question" field
  let newQuestion = $('question').value;
  //pulls the input from the "answer" field
  let newAnswer = $('answer').value;
  //checks that there is input in the field. else do nothing
  if (newQuestion.length > 0 && newAnswer.length > 0) {
    //creates HTML for new flashcard
    let newCard = '<div class="flashcard fade-in"><h3>' + newQuestion + '</h3><p class="hide">' + newAnswer + '</p><button type="button" id="show" onclick="">Show/Hide Answer</button><br><button type="button" id="know">I know it</button></div>'
    //inserts new HTML into the end of the body
    $('body').insertAdjacentHTML('beforeend', newCard);
    //runs function the adds event listeners to the buttons on the new flashcard
    addButtonToggles();
    //resets input fields
    $('question').value = '';
    $('answer').value = '';
  }
});

$('showKnown').addEventListener('click', function(){
  //pulls all current flashcards from DOM
  let flashcards = document.getElementsByClassName('flashcard');
  //makes all flashcards visible again
  for (i = 0; i < flashcards.length; i++){
    flashcards[i].classList.remove('hide');
    flashcards[i].classList.remove('fade-out');
  };
});

$('darkMode').addEventListener('click', function(){
  //if dark mode is on, set to off locally and in storage. set to light mode
  if (darkModeOn) {
    darkModeOn = false;
    localStorage.setItem('darkMode', 'false');
    setLightMode();
  }
  //if dark mode is off, set to on locallt and in storage. set to dark mode
  else {
    darkModeOn = true;
    localStorage.setItem('darkMode', 'true');
    setDarkMode();
  }
});
