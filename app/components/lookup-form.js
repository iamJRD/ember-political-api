import Ember from 'ember';

export default Ember.Component.extend({
  state: null,
  party: null,

  actions: {
    selectState() {
      this.set('state', event.target.value);
    },
    selectParty() {
      this.set('party', event.target.value);
    },

    zipLookup() {
      var params = {
        state: this.get('state'),
        party: this.get('party')
      };
      this.sendAction('zipLookup', params);
    }
  }
});
