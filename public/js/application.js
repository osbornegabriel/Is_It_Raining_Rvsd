$(document).ready(function(){
  var navigator = new Navigator()
  navigator.updateNav();
  addressFormListener();
  geolocateListener();
})