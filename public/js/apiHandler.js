var ApiHandler = function(){
  var apiCall;
  var weatherResponse;
  var requestFail;

  this.weatherCall = function(weatherForm){
    // weatherForm has data of local user's zipcode
    apiCall(weatherForm, weatherResponse);
  }

  apiCall = function($form, respFunc){
    // var $form = $(form);
    var formMethod = $form.attr("method");
    var formUrl = $form.attr("action");
    var formData = $form.serialize();
    $.ajax({
      method: formMethod,
      url: formUrl,
      data: formData,
    }).done(respFunc)
    .fail(requestFail)
  }

  weatherResponse = function(response){
    var forecast = new Forecast();
    //Boolean response was sent back as String
    raining = (String(response) == "true");
    forecast.predictRain(raining);
  }

  requestFail = function(failResponse){
    console.log("API call failed");
    console.log(failResponse);
  }
}

