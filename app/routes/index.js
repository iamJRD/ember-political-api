import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    legislatorFilter(params) {
      var urlParams;
      if((params.party !== null) && (params.state === null)) {
        urlParams = "party=" + params.party;
      } else if (params.party && params.state !== null) {
        urlParams = "party=" + params.party + "&state=" + params.state;
      } else {
        urlParams = "state=" + params.state;
      }
      this.transitionTo('results', urlParams);
    }
  }
});
