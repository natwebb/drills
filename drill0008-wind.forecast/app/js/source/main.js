/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get-weather').click(getWeather);
  }

  function getWeather(){
    var url = 'http://api.wunderground.com/api/7722e37186000a21/conditions/q/autoip.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    $('#description h3').text(data.current_observation.wind_string);
    $('#direction h3').text(data.current_observation.wind_dir);
    $('#degrees h3').text(data.current_observation.wind_degrees);
    $('#speed h3').text(data.current_observation.wind_mph);
    $('#gust h3').text(data.current_observation.wind_gust_mph);
    $('#location').text('Weather for ' + data.current_observation.display_location.full);
  }

})();
