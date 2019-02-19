var addressFormListener;

addressFormListener = function(){
  var forecast = new Forecasts();
  $('#zipcode-form').on('submit', function(e){
    e.preventDefault();
    forecast.predictRain(false);
  })
}