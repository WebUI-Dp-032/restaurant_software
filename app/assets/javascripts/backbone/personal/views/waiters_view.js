(function (AdminWaiterView, WaitersCollection, WaiterModel){

  window.RS.Views.AdminWaitersView = Backbone.View.extend({
    el: $('#waiter-list'),

    initialize: function() {
      this.collection = new WaitersCollection(); 
      this.collection.on("reset", this.renderAll, this);
      this.collection.fetch();
     },
    
    el: $("#waiter-create"),
    
    events: {
      "click #hide-waiter-create"   : "addWaiter"
    },

    renderAll: function() {
      this.collection.each(function(value, index){
        var view = new AdminWaiterView({model: value});
        $("#waiter-list").append(view.render().el);
      });

    },
    
    clearInputs: function() {
        $("#name").val('');
        $("#login").val('');
        $("#pass").val('');
    },

    addWaiter: function() {
      var args = {};
      $(".addField").each(function(index, value){
        args[index] = $(value).val();
      });
      this.collection.create(new WaiterModel({
                                              email                 : args[1]+'@r-soft.com',
                                              name                  : args[0], 
                                              username              : args[1], 
                                              password              : args[2],
                                              password_confirmation : args[2]
                                            }));
      this.clearInputs();
      
      $('#waiter-list').html('');
      this.collection.fetch();

    }

  });

})(window.RS.Views.AdminWaiterView, 
   window.RS.Collections.WaitersCollection,
   window.RS.Models.WaiterModel);
