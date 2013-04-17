(function (AdminWaiterView){

  window.RS.Views.AdminWaitersView = Backbone.View.extend({
    el: $('#waiter-list'),

    initialize: function() {
      this.collection = new WaitersCollection(); 
      this.collection.bind("add", this.createWaiter, this);
      this.collection.bind("change", this.changeWaiter, this);
     },
    
    el: $("#waiter-create"),
    
    events: {
      "click #hide-waiter-create"   : "addWaiter"
    },

    createWaiter: function(model_this) {
      var view = new AdminWaiterView({model: model_this});
      model_this.save();
     $("#waiter-list").append(view.render().el);
    },
    
    clearInputs: function() {
        $("#name").val('Waiter name');
        $("#login").val('Waiter login');
        $("#pass").val('Waiter password');
    },

    addWaiter: function() {
      var args = {};
      $(".addField").each(function(index, value){
        args[index] = $(value).val();
      });
      var new_id = this.collection.length;
      this.collection.create(new WaiterModel({name : args[0], login : args[1], password : args[2], id: ++new_id}));
      this.clearInputs();

    },

    changeWaiter: function(model_this) {
      var view = new AdminWaiterView();
      view.renderChange(model_this);
      model_this.save();
    }

  });

})(window.RS.Views.AdminWaiterView);
