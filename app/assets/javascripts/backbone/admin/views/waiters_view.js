(function (AdminWaiterView){

  window.RS.Views.AdminWaitersView = Backbone.View.extend({
    el: $('#waiter-list'),

    template: '',

    initialize: function() {

    },

    renderAll: function() {
      
    },

    renderOne: function(model) {
      var view = new AdminWaiterView({model: model});
      $('#waiter-list').append(view.render().el);
    }

  });

})(window.RS.Views.AdminWaiterView);