console.log('in client');
//global counter
let counter = 0;

$(document).ready(readyNow);

function readyNow(){
  console.log('in jq');
  addEventHandlers();
}

//holds all event handlers in one function
function addEventHandlers(){
  $('#generate').on('click', makeDiv);
  $('#content').on('click', '.delete', deleteDiv);
  $('#content').on('click', '.swap', swapColor);
}

//makes a new div, appends a p tag and two buttons, appends div to Dom
function makeDiv(){
  counter++;//counts how many times button has been clicked
  console.log('in make div');
  let divContent = $('<div class="generatedDiv"></div>');

  divContent.append('<p>'+counter+'</p>');
  divContent.append('<button class="swap">Swap</button>');
  divContent.append('<button class="delete">Delete</button>');
  //appends div to Dom
  $('#content').append(divContent);
}

//uses dom traversal to get to div and remove it
function deleteDiv(){
  console.log("in deleteDiv");
  $(this).parent().remove(); //thisButton.parent.remove
}

//uses toggleClass to change the class from red to yellow
//and back again if clicked
function swapColor(){
  console.log('in swapColor');
  $(this).parent().toggleClass('yellow');
}
