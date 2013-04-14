(function (WaiterView){

  window.RS.Views.WaitersView = Backbone.View.extend({
    el: $('#waiter-list'),

    template: '',

    initialize: function() {

    },

    renderAll: function() {
      
    },

    renderOne: function(model) {
      var view = new WaiterView({model: model});
      $('#waiter-list').append(view.render().el);
    }

  });

})(window.RS.Views.WaiterView);