import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

//Custom Resolver for theming
var customResolver = Resolver.extend({
  resolveTemplate: function(parsedName) {
    var themeName = (Ember.$('meta[name="theme"]')).attr('content');
    parsedName.fullNameWithoutType = themeName + "/" + parsedName.fullNameWithoutType;
    return this._super(parsedName);
  }
});

var App = Ember.Application.extend({
  modulePrefix: 'baniyafy-web', // TODO: loaded via config
  Resolver: customResolver
});

loadInitializers(App, 'baniyafy-web');

export default App;
