var Helpers = function(){
  this.updateBkImg = function(newImage){
    $('body').css("background-image", newImage);
  }

  this.clearContent = function(){
    $('#main-content').text('');
  }
}