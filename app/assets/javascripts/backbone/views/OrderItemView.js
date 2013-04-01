var OrderItemView = Backbone.View.extend({

  tagName: "tr",
  className: "order-item", 

  template: JST['backbone/templates/OrderItemTemplate'],

  events: {
    "click #minus_rows" : "delItem",
    "click #decrease" : "decreaseItem",
    "click .overflow" : "changeStatus"
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  delItem: function() {
      var summary = 0;
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
      
      summary = this.model.get("summary");
      Backbone.Mediator.pub("deleteItemSum", summary);
  },
  
  decreaseItem: function() {
      Weiter.Order.OrderCollection.url = "foods/" ;
      var summary_item,
          id_number = this.model.get("number");
      if (id_number > 1)
      {      
        summary_item = this.model.get("summary") - this.model.get("cost");
        this.model.set({number: --id_number, summary: summary_item});
        
        Weiter.Order.OrderView.clearView();
        Weiter.Order.OrderView.renderAll();
    
        Backbone.Mediator.pub("decreaseItemSum", this.model.get("cost"));
      }
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