(function (){

  window.RS.Views.PersonalView = Backbone.View.extend({
    className: 'tab-pane active',
    id: 'personal',

    template: JST['backbone/admin/templates/personal_template'],

    events: {
      'click #show-waiter-create' : 'test'
    },

    initialize: function() {
      
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    },

    test: function() {
      console.log('test');
    }

  });

})();