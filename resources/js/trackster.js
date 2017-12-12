
$(document).ready(function(){
  var Trackster = {};
  var Tracks = [];
  var searchKey = "none";
  const API_KEY = '61b0352a75f1065e8a95b03a2880fed8';
  $('#button').click(function(){
     Trackster.searchTracksByTitle($('#search').val());
     });


  /*
    Given an array of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks.
  */
  Trackster.renderTracks = function(tracks) {
    var $searchRow = $('#search-row');
    $searchRow.empty();
    for (var trackIndex = 0; trackIndex < tracks.length; trackIndex++){
    /*  var track = tracks[i]; */
      var track = tracks[trackIndex];
      var mediumAlbumArt = track.image[1]["#text"];
      var result = '<div class="row table-row">' +
          '<div class="col-md-1">' + ' </div>' +
          '<div class="col-md-1">' +
            '<i class="fa fa-play-circle-o" aria-hidden="true"></i>' +
          '</div>' +
          '<div class="col-md-3">'
          + track.name +
          '</div>' +
          '<div class="col-md-3">'
           + track.artist +
          '</div>' +
          '<div class="col-md-2">' +
            '<img src="' + mediumAlbumArt + '"/>' +
          '</div>' +
          '<div class="col-md-2">'
            + track.listeners +
          '</div>' +
        '</div>';
      $searchRow.append(result);
    }
  };


  Trackster.searchTracksByTitle = function(title) {
    $.ajax({
        url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
        success: function(response){
        Tracks = response.results.trackmatches.track;
        Trackster.renderTracks(Tracks);
        searchKey = "track";
        }
      })
    };

  /*
    Given a search term as a string, query the LastFM API.
    Render the tracks given in the API query response.
  */

});
