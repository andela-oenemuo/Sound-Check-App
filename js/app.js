$(function(){
  window.Sound = {
    searchSound: $('#term'),
    searchButton: $('#searchBtn'),
    searchValue : function() {
      var searchInput = Sound.searchSound.val();
        console.log(searchInput);
      //var searchTerm = searchInput

      function  init() {
        client_id = '3720e9819eec714050d69665601dad27';
        
      };
    };
  };
  Sound.searchButton.click(Sound.searchValue());
});
