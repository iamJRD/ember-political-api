import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model(urlParams) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/legislators?' + urlParams.query + '&apikey=' + key + '&per_page=50';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});


// if(params.queryType === "zip") {
//
// } else if(params.queryType === "state") {
//   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=fb3fe588f7914d6587977af7050c58a3&state=' + params.userInput;
//   return Ember.$.getJSON(url).then(function(responseJSON) {
//     return responseJSON.results;
//   });
// } else if(params.queryType === "zip+state") {
//
// }


// if(params.zip !== "null" && params.state != "null") {
//
// } else if (params.zip === "null" && params.state != "null") {
//
// } else if (params.zip !== "null" && params.state === "null") {
//   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=fb3fe588f7914d6587977af7050c58a3&zip=' + params.zip;
// }
