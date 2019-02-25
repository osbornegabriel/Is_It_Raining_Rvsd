var ApiHandler = function(){
  var apiCall;
  var weatherResponse;
  var requestFail;
  var ajaxCall;
  var processForm;

  this.navWeatherCall = function(latitude,longitude){
    var formMethod = "POST";
    var formURL = "/forecasts";
    var data = createNavData(latitude,longitude);
  }

  this.weatherCall = function(weatherForm){
    // weatherForm has data of local user's zipcode
    processForm(weatherForm, weatherResponse);
  }

  function createNavData(longitude,latitude){
    longData = "address%5Blongitude%5D=" + longitude;
    latData = "address%5Blatitude%5D=" + latitude;
    return longData + "&" + latData;
  }

  processForm = function($form, respFunc){
    var formMethod = $form.attr("method");
    var formUrl = $form.attr("action");
    var formData = $form.serialize();
    ajaxCall(formMethod, formUrl, formData, respFunc);
  }

  ajaxCall = function(formMethod, formUrl, formData, respFunc){
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

