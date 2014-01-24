/* jshint camelcase:false */

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
    for(var i = 0; i<4; i++){
      var weekDay = data.forecast.simpleforecast.forecastday[i].date.weekday;
      var iconUrl = data.forecast.simpleforecast.forecastday[i].icon_url;
      var conditions = data.forecast.simpleforecast.forecastday[i].conditions;

      $('#day'+i).css('background-image','url('+iconUrl+')');
      $('#day'+i+' h2').text(weekDay);
      $('#day'+i+' h3').text(conditions);
    }

  }

})();
