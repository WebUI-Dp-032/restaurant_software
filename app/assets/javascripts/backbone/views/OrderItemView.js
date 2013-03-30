var OrderItemView = Backbone.View.extend({

  tagName: "tr",
  className: "order-item",

  template: JST['backbone/templates/OrderItemTemplate'],

  events: {
    "click #minus_rows" : "delItem",
    "click #decrease" : "decreaseItem",
    "click .overflow" : "changeStatus",
    "click #minus_rows" : "delItem"
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  delItem: function() {
      Weiter.Order.OrderCollection.url = "foods/" ;
      this.model.destroy({success: function(model, response) {
          console.log ("Success");
          },
        error: function(model, response){
          console.log ("Error");
        }
      });
      Weiter.Order.OrderView.clearView();
      Weiter.Order.OrderView.renderAll();
      
      var summary = this.model.get("summary");
      Backbone.Mediator.pub("deleteItemSum", summary);
  },
  
  decreaseItem: function() {
      Weiter.Order.OrderCollection.url = "foods/" ;
      var id_number = this.model.get("number");
      id_number -= 1;
    
      this.model.set("number", id_number);
      this.model.save({number: id_number});
      
      var cost = this.model.get("summary") - this.model.get("cost");
      
      this.model.set("cost", cost);
      this.model.save({cost: cost});
      
      Weiter.Order.OrderView.clearView();
      Weiter.Order.OrderView.renderAll();
  
      var cost = this.model.get("cost"); //пересчитать total
      Backbone.Mediator.pub("decreaseItemSum", cost);
  },
  
  changeStatus: function() {
    Weiter.Order.OrderCollection.url = "foods/" ;
    var status = this.model.get("state");
    if(status == false){
      this.model.set("state", status);
      this.model.save({state: status});
      $(this).css("text-decoration", "line-through" ); 
    }
  }

});