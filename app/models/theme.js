import DS from 'ember-data';

var Theme = DS.Model.extend({
  name: DS.attr('string')
});

Theme.reopenClass({
  FIXTURES: { name: 'theme2' }
});

export default Theme;
