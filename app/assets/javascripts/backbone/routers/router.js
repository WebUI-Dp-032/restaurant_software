window.RS.Router = new (Backbone.Router.extend({
  
  routes:{
    // "waiter" : "index",
    // "admin" : "admin",
  },

  waiter: function() {
    console.log('Enter waiter');
    view = new window.RS.Views.AppView();
    view.render();
  },

  admin: function() {
    console.log('Enter admin');
    view = new window.RS.Views.AdminAppView();
    view.render();
  }



}))();

Backbone.history.start({pushState: true});