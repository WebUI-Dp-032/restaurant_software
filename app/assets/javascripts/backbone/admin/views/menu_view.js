(function (){

  window.RS.Views.MenuView = Backbone.View.extend({
    className: 'tab-pane active',
    id: 'menu',

    template: JST['backbone/admin/templates/menu_template'],

    initialize: function() {
      
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });

})();