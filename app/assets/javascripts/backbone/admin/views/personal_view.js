(function (WaitersView){

  window.RS.Views.PersonalView = Backbone.View.extend({
    className: 'tab-pane active',
    id: 'personal',

    template: JST['backbone/admin/templates/personal_template'],

    events: {
      'click #show-waiter-create' : 'showCreateWaiter',
      'click #hide-waiter-create' : 'createWaiter'
    },

    initialize: function() {
      this.waiters_view = new WaitersView();
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
    }



  });

})(window.RS.Views.WaitersView);