(function (){

  window.RS.Views.AdminHallView = Backbone.View.extend({
    className: 'tab-pane active',
    id: 'hall',

    template: JST['backbone/tables/admin/templates/hall_template'],

    initialize: function() {
		  // var hallView = new window.RS.Views.ManageHallView();
      
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });

})();