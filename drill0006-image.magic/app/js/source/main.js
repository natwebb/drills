(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addImage').click(clickAddImage);
  }

  function clickAddImage(){
    var source = $('#imageURL').val();
    var newImage = $('<div>');
    newImage.addClass('image');
    newImage.css('background-image', 'url('+source+')');
    $('#imageHolder').append(newImage);
  }

})();
