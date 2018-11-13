$(function() {
    
  $.get('/search-track', function(data) {
    // "Data" is the object we get from the API. See server.js for the function that returns it.
    console.group('%cResponse from /search-track', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    // Display the track name
    const trackName = $('<h3><a href="' + data.external_urls.spotify + '">' + data.name + '</a></h3>');
    const artistName = $('<h3>' + data.artists[0].name + '</h3>');
    trackName.appendTo('#search-track-container');
    artistName.appendTo('#search-track-container');
    
    // Display the album art
    const img = $('<img/>');
    img.attr('src', data.album.images[0].url);
    img.appendTo('#search-track-container');
  });
  
});