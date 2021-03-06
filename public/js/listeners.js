var addressFormListener;
var geolocateListener;

addressFormListener = function(){
  // var forecast = new Forecasts();
  var apiHandler = new ApiHandler();

  $('#zipcode-form').on('submit', function(e){
    e.preventDefault();
    $form = $(this);
    apiHandler.weatherCall($form);
  })
}

geolocateListener = function(){
  var apiHandler = new ApiHandler();
  $('.geolocate__button').on('click', function(e){
    apiHandler.navWeatherCall(window.latitude, window.longitude);
  })
}