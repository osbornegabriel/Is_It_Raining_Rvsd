var Helpers = function(){
  this.updateBkImg = function(newImage){
    $('body').css("background-image", newImage);
  }

  this.clearContent = function(){
    $('#main-content').text('');
  }

  this.updateContent = function(txt){
    $('#main-content').html("<h1 class='cloud-text'>" + txt + "</h1>");
  }
}