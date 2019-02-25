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

geolocateListener = function(navigator){
  setTimeout(function(){console.log(this.latitude);}, 4000);
}