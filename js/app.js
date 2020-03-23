function $(value)
{
  return document.getElementById(value);
}

function addAnswerToggle()
{
  let flashcards = document.getElementsByClassName('flashcard');
  let lastCard = flashcards[flashcards.length - 1];
  let lastCardP = lastCard.getElementsByTagName('p')[0];
  let lastCardButton = lastCard.getElementsByTagName('button')[0];
  console.log(lastCardP);
  lastCardButton.addEventListener('click', function(){
    lastCardP.classList.toggle('hide');
  });
}

$('add').addEventListener('click', function(){
  let newQuestion = $('question').value;
  let newAnswer = $('answer').value;
  if (newQuestion.length > 0 && newAnswer.length > 0) {
    let newCard = '<div class="flashcard"><h3>' + newQuestion + '</h3><p class="hide">' + newAnswer + '</p><button type="button" id="show" onclick="">Show/Hide Answer</button></div>'
    $('body').insertAdjacentHTML('beforeend', newCard);
    addAnswerToggle();
    $('question').value = '';
    $('answer').value = '';
  }
  else {

  }
});
