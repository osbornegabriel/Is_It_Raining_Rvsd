var isRaining;
var rainStatus;

var Forecasts = function() {

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
    helper.updateBkImg("url(/images/IIR_is_raining.jpg)");
    helper.clearContent();
    helper.updateContent('YES!!!')
  }

  notRaining = function(){
    var helper = new Helpers;
    helper.updateBkImg("url(/images/IIR_not_raining.jpg)");
    helper.clearContent();
    helper.updateContent('No...');
  }
}




