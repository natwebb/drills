(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addZip').click(clickAddZip);
    $('#getForecast').click(clickGetForecast);
  }

  function clickAddZip(){
    var zipCode = $('#zipCode').val();

    var newOption = $('<option>'+zipCode+'</option>');
    $(newOption).val(zipCode);
    $('#zipList').append(newOption);

    $('#zipCode').val('');
    $('#zipCode').focus();
  }

  function clickGetForecast(){
    var zipCode = $('#zipList').val();
    var url = 'http://api.wunderground.com/api/7722e37186000a21/forecast/q/'+zipCode+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    console.log(data);
  }

})();
