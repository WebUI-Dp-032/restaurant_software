(function (AdminWaitersView){

  window.RS.Views.AdminPersonalView = Backbone.View.extend({
    className: 'tab-pane active',

    template: JST['backbone/admin/templates/personal_template'],

    events: {
      'click #show-waiter-create' : 'showCreateWaiter',
      'click #hide-waiter-create' : 'createWaiter'
    },

    initialize: function() {
      this.waiters_view = new AdminWaitersView();
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    },

    showCreateWaiter: function() {
      $("#waiter-create").show("slow");
      $("#show-waiter-create").hide("slow");
    },

    createWaiter:function() {
      $("#waiter-create").hide("slow");
      $("#show-waiter-create").show("slow");
      this.waiters_view.addWaiter();
    }



  });

})(window.RS.Views.AdminWaitersView);