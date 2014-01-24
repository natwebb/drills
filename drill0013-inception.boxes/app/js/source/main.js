(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#makeBoxes').click(clickMakeBoxes);
  }

  function clickMakeBoxes(){
    var boxNum = $('#boxCount').val();

    $('#boxCount').val('');
    $('#boxCount').focus();
    $('#boxBox').css('height', 2*boxNum);
    $('#boxBox').css('width', 2*boxNum);

    var a = [];
    a.push(createBox(boxNum));
    $('#boxBox').append(a[0]);

    for(var i = boxNum-1; i > 0; i--){
      var newBox = createBox(i);
      a.unshift(newBox);
      a[1].append(newBox);
    }
  }

  function createBox(x){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    var boxxy = $('<div>');
    boxxy.css('height', ((2*x)-2));
    boxxy.css('width', ((2*x)-2));
    boxxy.css('border', '1px solid rgb('+r+','+g+','+b+')');
    return boxxy;
  }

})();
