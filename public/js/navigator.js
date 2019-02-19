var Navigator = function(){
  var navigator = window.navigator;
  var coordinates = navigator.geolocation;

  this.logCoordinates = coordinates.getCurrentPosition(logCoordinates);

  function logCoordinates(position){
    console.log([position.coords.latitude, position.coords.longitude])
    return position;
  }

}