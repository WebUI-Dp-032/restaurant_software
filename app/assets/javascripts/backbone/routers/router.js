window.RS.Router = new (Backbone.Router.extend({
  
  routes:{
    'proxy/:resource' : 'proxy'
  },

  waiter: function() {
    view = new window.RS.Views.AppView();
    view.render();
  },

  admin: function() {
    view = new window.RS.Views.AdminAppView();
    view.render();
  },

  proxy: function(resource) {
    this.route(resource, resource);
    this.navigate(resource, {trigger: true});
  }



}))();

Backbone.history.start({pushState: true});