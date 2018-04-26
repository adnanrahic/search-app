 /*var express = require('express');
var router = express.Router();
var request = require('request');
var youtubeApi = 'https://www.googleapis.com/youtube/v3/search';
var youtubeKey = 'AIzaSyCEUOGnxoN2IZRsVbehWoMeqEAQliWDAvk';


router.post('/', function(req, res, next) {
  var params = {
           url: youtubeApi,
           qs: {
               part: 'snippet',
               q: '',
               order: 'viewCount',
               type: 'video',
               maxResults: 10,
               key: youtubeKey
           }
       };

       request.get(params, (error, response, body) => {
           if (error) {
               return res.status(500).json(error);
           }

           var parsed = JSON.parse(body);

           res.status(200).json(parsed);
       });
});

module.exports = router; */
