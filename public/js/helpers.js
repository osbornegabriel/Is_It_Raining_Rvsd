var Helpers = function(){
  this.updateBkImg = function(newImage){
    $('body').css("background-image", newImage);
  }

  this.clearContent = function(){
    $('#main-content').text('');
  }

  // Checks @media orientation, for use when updating the background image
  this.isLandscape = function(){
    return window.matchMedia("(orientation: landscape)").matches;
  }

  this.updateContent = function(txt){
    $('#main-content').html("<h1 class='cloud-text'>" + txt + "</h1>");
  }

}