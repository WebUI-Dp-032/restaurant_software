(function (){

  window.RS.Views.AdminWaiterView = Backbone.View.extend({

    template: JST['backbone/admin/templates/waiter_template'],
    
    className: "accordion-group",

    events: {
      "click .btn-danger":"deleteWaiter",
      "click .btn-warning":"editWaiter"
    },

    render: function() {
       this.$el.html(this.template(this.model.attributes));
       return this;
    },

    renderChange: function(model_this) {
       this.$el.val(model_this.attributes.name);
       this.$el.val(model_this.attributes.login);
       this.$el.val(model_this.attributes.password);
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
        this.model.set({name : args[0], login : args[1], password : args[2]});
     }


  });

})();