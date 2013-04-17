(function (WaiterView){

  window.RS.Views.WaitersView = Backbone.View.extend({

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
      var view = new WaiterView({model: model_this});
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
      var view = new WaiterView();
      view.renderChange(model_this);
      model_this.save();
    }

  });

})(window.RS.Views.WaiterView);