import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = ({ query, max = 5 }, callback) => {
  return $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: callback, //callback(data)
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      maxResults: max,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    },
    contentType: 'application/json',
    error: (err) => console.error(err)
  });


};

export default searchYouTube;
