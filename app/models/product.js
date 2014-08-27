import DS from 'ember-data';

var Product = DS.Model.extend({
  name: DS.attr('string')
});

export default Product; 
