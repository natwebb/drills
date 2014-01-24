(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addOption').click(clickAddOption);
  }

  function clickAddOption(){
    var optionName = $('#optionName').val();
    var count = $('#theSelect option').length;

    var newOption = $('<option>'+optionName+'</option>');
    $(newOption).val(count);
    $('#theSelect').append(newOption);

    $('#optionName').val('');
    $('#optionName').focus();
  }

})();
