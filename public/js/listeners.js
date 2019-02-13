var addressFormListener;

addressFormListener = function(){
  $('#zipcode-form').on('submit', function(e){
    e.preventDefault();
    isRaining();
  })
}