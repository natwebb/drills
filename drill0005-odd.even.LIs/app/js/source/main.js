(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addLis').click(clickAddLis);
  }

  function clickAddLis(){
    $('ul').detach();

    var num = $('#number').val();

    var liHolder = $('<ul>');

    for(var i = 1; i <= num; i++){
      var newLi = $('<li>' + i + '</li>');
      if(i%2===0){
        newLi.css('background-color', 'green');
      }
      else{
        newLi.css('background-color', 'red');
      }
      liHolder.append(newLi);
    }

    $('body').append(liHolder);
  }

})();
