import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var key = config.myApiKey;
    var subcommitteeUrl = 'http://congress.api.sunlightfoundation.com/committees?parent_committee_id=' + params.committee_id + '&apikey=' + key;

    return Ember.$.getJSON(subcommitteeUrl).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
