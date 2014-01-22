(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addColors').click(clickAddColors);
  }

  function clickAddColors(){
    var list = $('#colorList').val();
    var cutList = list.split(', ');
    var total = 0;

    for(var i = 0; i < cutList.length; i++){
      total += i+1;
      var box = $('<div>');
      box.css('background-color', cutList[i]);
      box.text(i+1);
      $('#colorHolder').append(box);
    }

    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);

    var sumBox = $('<div>');
    sumBox.css('background-color', 'rgb('+red+', '+green+', '+blue+')');
    sumBox.text(total);
    $('#colorHolder').append(sumBox);
  }

})();
