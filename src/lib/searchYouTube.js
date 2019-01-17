var searchYouTube = (options, callback) => {
  //{query, max, key} {q, maxResults: 5}

  return $.get("https://www.googleapis.com/youtube/v3/search", callback(data));
  // let searchData = () => {
  //   return $.ajax({
  //     url: 'https://www.googleapis.com/youtube/v3/search',
  //     type: 'GET',
  //     data: ,
  //     contentType: ''
  //   });
  // }
};

export default searchYouTube;
