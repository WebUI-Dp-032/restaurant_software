(function (){

  window.RS.Views.WaiterView = Backbone.View.extend({
    className: 'accordion-group',

    template: JST['backbone/admin/templates/waiter_template'],

    initialize: function() {
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }

  });

})();