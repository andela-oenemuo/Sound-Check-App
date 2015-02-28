var MySound = {
    searchSound: $('#term'),
    searchButton: $('#searchBtn'),
    searchValue : function() {
      var searchInput = MySound.searchSound.val();
        console.log(searchInput);
      //var searchTerm = searchInput;

      SC.initialize({
        client_id: '3720e9819eec714050d69665601dad27'
      });

      SC.get('/tracks', { q: searchInput }, function(tracks) {
        $(tracks).each(function(index, track) {
          $('<li id="links"><a href=' + track.permalink_url +' target="_blank">' + track.title + '</a></li>').appendTo('#results');
            $("ul").appendTo("#list");
            
            var track_url = track.permalink_url;
            SC.oEmbed(track_url, {auto_play: true}, function(oEmbed){
              console.log('oEmbed response: ' + oEmbed);
              $('#player').html(track.title); SC.oEmbed(track.permalink_url,
                 document.getElementById('player')); 
            });
        });
        SC.get('/tracks/1', function(track, error) {
          if (q === "") { alert('Error: ' + error.message); }
        });
      });


      
    },

    init: function () {
      $('#searchBtn').click(function() {
        $('#results').empty();
          MySound.searchValue();
          //console.log('Hello');
      });
    }
    
}
MySound.init();
