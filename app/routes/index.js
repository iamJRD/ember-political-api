import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup (params) {
      var urlParams;
      if(params.party && params.state) {
        var urlParams = "party=" + params.party + "&state=" + params.state;
      } else if (params.party && (params.state === "null")) {
        var urlParams = "party=" + params.party;
      }

      // return query;

      this.transitionTo('results', urlParams);
    }
  }
});
