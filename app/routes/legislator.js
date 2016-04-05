import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var key = config.myApiKey;
    var legislatorUrl = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id=' + params.bioguide_id +'&apikey=' + key;
    var url = 'http://congress.api.sunlightfoundation.com/committees?member_ids=' + params.bioguide_id +'&apikey=' + key;
    return Ember.RSVP.hash({
      committees: Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      }),

      member: Ember.$.getJSON(legislatorUrl).then(function(responseJSON) {
        return responseJSON.results;
      })
    });

  }
});
