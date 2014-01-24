(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addOption').click(clickAddOption);
    $('#theSelect').change(changeColor);
  }

  function clickAddOption(){
    var optionName = $('#optionName').val();
    optionName = optionName.toUpperCase();
    var optionVal = optionName.toLowerCase();

    var newOption = $('<option>'+optionName+'</option>');
    $(newOption).val(optionVal);
    $('#theSelect').append(newOption);

    $('#optionName').val('');
    $('#optionName').focus();
  }

  function changeColor(){
    var colorName = $('#theSelect').val();
    $('#paint').css('background-color', colorName);
  }

})();
