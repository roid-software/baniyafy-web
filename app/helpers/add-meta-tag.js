import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) {
  Ember.$('head').append("<meta name='theme' content='theme1'>");
  return value;
});
