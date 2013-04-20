(function (){

  window.RS.Views.AdminWaiterView = Backbone.View.extend({

    template: JST['backbone/personal/templates/waiter_template'],
    
    className: "accordion-group",

    events: {
      "click .btn-danger":"deleteWaiter",
      "click .btn-warning":"editWaiter"
    },

    initialize: function() {
      this.model.on('change', this.render, this)
    },

    render: function() {
       this.$el.html(this.template(this.model.attributes));
       return this;
    },

    deleteWaiter: function() {
      this.model.destroy();
      this.$el.remove();
     },

     editWaiter: function() {
      var args = {};
      $(".change-"+this.model.get("id")).each(function(index, value){
        args[index] = $(value).val();
      });
        this.model.save({name : args[0], username : args[1]});
     }


  });

})();