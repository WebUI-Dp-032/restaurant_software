(function (AdminWaitersView){

  window.RS.Views.AdminPersonalView = Backbone.View.extend({
    className: 'tab-pane active',

    template: JST['backbone/personal/templates/personal_template'],

    events: {
      'click #show-waiter-create' : 'showCreateWaiter',
      'click #hide-waiter-create' : 'createWaiter',
      'keyup #login' : 'validateLogin'
    },

    initialize: function() {
      this.waiters_view = new AdminWaitersView();
      Backbone.Mediator.sub('personal_view_change_controls', this.block, this);
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
    },

    validateLogin: function() {
      Backbone.Mediator.pub('waiters_view_validate_login', $('#login').val());
    },

    block: function(block) {
      if (block) { 
        $('#hide-waiter-create').attr('disabled', 'disabled');
        $('#hide-waiter-create').removeClass('btn-success');
        $('#hide-waiter-create').addClass('btn-danger');
        $('#control-login').addClass('error');
      } else {
        $('#hide-waiter-create').removeAttr('disabled');
        $('#control-login').removeClass('error');
        $('#hide-waiter-create').removeClass('btn-danger');
        $('#hide-waiter-create').addClass('btn-success');
      }
    }



  });

})(window.RS.Views.AdminWaitersView);