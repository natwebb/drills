(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#makeSquares').click(clickMakeSquares);
    $('#squareHolder').on('click', '.wordSquare', addToSentence);
    $('#clear').click(clickClear);
  }

  function clickMakeSquares(){
    var words = $('#words').val();
    $('#words').val('');
    $('#words').focus();

    var wordSet = words.split(' ');

    for(var i = 0; i<wordSet.length; i++){
      var $newDiv = $('<div>');
      $newDiv.text(wordSet[i]);
      $newDiv.addClass('wordSquare');
      $('#squareHolder').append($newDiv);
    }
  }

  function addToSentence(){
    var current = $('#sentence').text();
    var word = this.textContent;
    $('#sentence').text(current + ' ' + word);
  }

  function clickClear() {
    $('#sentence').text('');
    $('#squareHolder').empty();
  }

})();
