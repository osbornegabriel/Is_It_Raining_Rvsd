var ApiHandler = function(){
  var apiCall;
  var weatherResponse;
  var requestFail;

  this.weatherCall = function(weatherForm){
    // weatherForm has data of local user's zipcode
    apiCall(weatherForm, weatherResponse);
  }

  apiCall = function(form, respFunc){
    var $form = $(form);
    var formMethod = $form.attr("method");
    var formUrl = $form.attr("url");
    var formData = $form.serialize();
    $.ajax({
      method: formMethod,
      url: formUrl,
      data: formData
    }).done(respFunc).fail(requestFail)
  }

  weatherResponse = function(response){
    forecast = new Forecast();
    forecast.predictRain(response);
  }

  requestFail = function(failResponse){
    console.log("API call failed");
    console.log(failResponse);
  }
}

