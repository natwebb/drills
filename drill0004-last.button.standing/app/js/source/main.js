(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#makeTwo').click(clickMakeTwo);
    $('body').on('click', '#New1', clickDetachMakeTwo);
    $('body').on('click', '#New2', clickDetachOtherNew);
  }

  function clickMakeTwo(){
    var $first = $('<button id="New1">Erase the make-two button</button>');
    var $second = $('<button id="New2">Erase the other new button</button>');

    $('body').append($first, $second);
  }

  function clickDetachMakeTwo(){
    $('#makeTwo').detach();
  }

  function clickDetachOtherNew(){
    $('#New1').detach();
  }

})();
