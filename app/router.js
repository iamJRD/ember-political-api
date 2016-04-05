import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:query'});
  this.route('legislator', {path: '/legislator/:bioguide_id'});
  this.route('committee', {path: '/committee/:committee_id'});
});

export default Router;
