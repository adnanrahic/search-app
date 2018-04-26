$(document).ready(function () {
    $('#searchterm').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });
});

function getRequest(searchTerm) {
    url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        type: 'video',
        key: 'AIzaSyCsJxPieXjWm2p5Ba8M187SjbGfq47OCTw',
        q: searchTerm
    };

    $.getJSON(url, params, function (searchTerm) {
        showResults(searchTerm);
    });
}

function showResults(results) {
    var html = "";
    var entries = results.items;

    $.each(entries, function (index, value) {
        var title = value.snippet.title;
        var thumbnail = value.snippet.thumbnails.medium.url;
        var description = value.snippet.description;
        var videoId = value.snippet.videoId;

        html += '<p>' + title + '</p>';
        html += '<img src="' + thumbnail + '">';
        html += '<p>' + description + '<p>';
        html += '<youtube.com/watch?v="' + videoId + '">';
    });

    $('#results').html(html);
}

$("#search").submit(function(){
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
          tags: $("#searchterm").val(),
          tagmode: "any",
          format: "json"
        },
        function(data) {
          $.each(data.items, function(i,item){
            $("<img/>").attr("src", item.media.m).prependTo("#results");
            if ( i == 10 ) return false;
          });
        });
      });

/*$("#search").click(function(){
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=1",
        {
          tags: $("#searchterm").val(),
          tagmode: "any",
          format: "json"
        },
        function(data) {
          $.each(data.items, function(i,item){
            $("<img/>").attr("src", item.media.m).prependTo("#results");
            if ( i == 10 ) return false;
          });
        });
      }); */

/*$(document).ready(function () {
    $("#search-term").click(function (event) {
      var searchVal = $("#query").val();
      var flickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8714c197ab22db5849dcfe152e7e9a57&nojsoncallback=1";
      $.getJSON( flickrAPI, {
        tags: searchVal,
        per_page: 25,
        format: "json"
      },
        function( data ) {
        $.each( data.photos.photo, function( i, item ) {
          var url = 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
         $('#search.results').append('<img src="' + url + '"/>');
       });
     });
  });
}); */
