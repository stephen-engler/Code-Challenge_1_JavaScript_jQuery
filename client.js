console.log('in client');

let counter = 0;
$(document).ready(readyNow);

function readyNow(){
  console.log('in jq');
  addEventHandlers();
}

function addEventHandlers(){
  $('#generate').on('click', makeDiv);
  $('#content').on('click', '.delete', deleteDiv);
}

function makeDiv(){
  counter++;
  console.log('in make div');
  let divContent = $('<div class="generatedDiv"></div>');

  divContent.append('<p>'+counter+'</p>');
  divContent.append('<button class="swap">Swap</button>');
  divContent.append('<button class="delete">Delete</button>');

  $('#content').append(divContent);
}

function deleteDiv(){
  $(this).parent().remove();
}
