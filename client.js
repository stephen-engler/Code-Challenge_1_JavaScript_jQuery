console.log('in client');

let counter = 0;
$(document).ready(readyNow);

function readyNow(){
  console.log('in jq');
  addEventHandlers();
}

function addEventHandlers(){
  $('#generate').on('click', makeDiv);
}

function makeDiv(){
  counter++;
  console.log('in make div');
  let divContent = $('<div></div>');

  divContent.append('<p>'+counter+'</p>');

  $('#content').append(divContent);



}
