(function(){
  'use strict';

  function initialize(){
    $('#add-color').click(clickAddColor);
  }

  function clickAddColor(){
    var newColor = $('#color').val();
    var $colorDiv = $('<div>');
    $colorDiv.css({'background-color': newColor, 'width': '50px', 'height': '50px', 'float': 'left'});
    $('#colors').prepend($colorDiv);
  }

  $(document).ready(initialize);
})();

