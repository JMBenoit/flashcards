function $(value)
{
  return document.getElementById(value);
}

function addButtonToggles()
{
  let flashcards = document.getElementsByClassName('flashcard');
  let lastCard = flashcards[flashcards.length - 1];
  let lastCardP = lastCard.getElementsByTagName('p')[0];
  let lastCardShowButton = lastCard.getElementsByTagName('button')[0];
  lastCardShowButton.addEventListener('click', function(){
    lastCardP.classList.toggle('hide');
  });
  let lastCardKnowButton = lastCard.getElementsByTagName('button')[1];
  lastCardKnowButton.addEventListener('click', function(){
    lastCard.classList.toggle('hide');
  });
}

$('add').addEventListener('click', function(){
  let newQuestion = $('question').value;
  let newAnswer = $('answer').value;
  if (newQuestion.length > 0 && newAnswer.length > 0) {
    let newCard = '<div class="flashcard"><h3>' + newQuestion + '</h3><p class="hide">' + newAnswer + '</p><button type="button" id="show" onclick="">Show/Hide Answer</button><br><button type="button" id="know">I know it</button></div>'
    $('body').insertAdjacentHTML('beforeend', newCard);
    addButtonToggles();
    $('question').value = '';
    $('answer').value = '';
  }
  else {}
});

$('showKnown').addEventListener('click', function(){
  let flashcards = document.getElementsByClassName('flashcard');
  for (i = 0; i < flashcards.length; i++){
    flashcards[i].classList.remove('hide');
  };

});
