import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  //you can pass anything into the model below, as long as it matches in the url variables. Could be called params, model, bob, whatever.
  model(legislator) {
    var key = config.myApiKey;
    var legislatorUrl = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id=' + legislator.bioguide_id +'&apikey=' + key;
    var committeeUrl = 'http://congress.api.sunlightfoundation.com/committees?member_ids=' + legislator.bioguide_id +'&apikey=' + key;

    return Ember.RSVP.hash({
      committees: Ember.$.getJSON(committeeUrl).then(function(responseJSON) {
        return responseJSON.results;
      }),

      member: Ember.$.getJSON(legislatorUrl).then(function(responseJSON) {
        return responseJSON.results;
      })
    });

  }
});
