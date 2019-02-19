var addressFormListener;

addressFormListener = function(){
  // var forecast = new Forecasts();
  var apiHandler = new ApiHandler();

  $('#zipcode-form').on('submit', function(e){
    e.preventDefault();
    $form = $(this);
    apiHandler.weatherCall($form);
  })
}