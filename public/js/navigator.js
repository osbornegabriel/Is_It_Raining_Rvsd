var Navigator = function(){
  var navigator = window.navigator;
  var coordinates = navigator.geolocation;

  this.latitude;
  this.longitude;

  this.updateNav = function(){
    locate();
    setInterval(locate, 20000);
  }

  function locate(){
    coordinates.getCurrentPosition(logCoordinates);
  }

  function logCoordinates(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    // presently logging coordinates for development purposes
    console.log([position.coords.latitude, position.coords.longitude]);
  }

}