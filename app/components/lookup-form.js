import Ember from 'ember';

export default Ember.Component.extend({
  state: null,
  party: null,
  page: 1,

  actions: {
    selectState() {
      this.set('state', event.target.value);
    },
    selectParty() {
      this.set('party', event.target.value);
    },

    legislatorFilter() {
      var params = {
        state: this.get('state'),
        party: this.get('party')
      };
      this.sendAction('legislatorFilter', params);
    }
  }
});
