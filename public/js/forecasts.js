var Forecast = function() {
  var changeStatus;
  var isRaining;
  var notRaining;

  this.predictRain = function(rainStatus){
    changeStatus(rainStatus);
  }

  changeStatus = function(rainStatus) {
    if (rainStatus) {
      isRaining();
    } else {
      notRaining();
    }
  }

  isRaining = function(){
    var helper = new Helpers;
    var newBackground;
    newBackground = helper.isLandscape ? "url(/images/IIR_landscape_is_raining.png)" : "url(/images/IIR_is_raining.jpg)";
    helper.updateBkImg(newBackground);
    helper.clearContent();
    helper.updateContent('YES!!!')
  }

  notRaining = function(){
    var helper = new Helpers;
    newBackground = helper.isLandscape ? "url(/images/IIR_landscape_not_raining.png)" : "url(/images/IIR_not_raining.jpg)";
    helper.updateBkImg(newBackground);
    helper.clearContent();
    helper.updateContent('No...');
  }
}




