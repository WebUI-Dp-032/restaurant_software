var OrderItemView = Backbone.View.extend({

  tagName: "tr",
  className: "order-item",

  template: JST['backbone/templates/OrderItemTemplate'],

  events: {
    "click #minus_rows" : "delItem",
    "click #decrease" : "decreaseItem",
    "click .overflow" : "changeStatus",
    "click #increase" : "increaseItem"
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  delItem: function() {
      var summary = 0;
      Waiter.Order.OrderCollection.url = "foods/" ;

      this.model.destroy({success: function(model, response) {      
          console.log ("Success");
          },
        error: function(model, response){
          console.log ("Error");
        }
      });
      Waiter.Order.OrderView.clearView();
      Waiter.Order.OrderView.renderAll();
      
      summary = this.model.get("summary");
      Backbone.Mediator.pub("changeTotalSum", {action: "sub", value:summary});
  },
  
  decreaseItem: function() {
      var summary_item,
          id_number = this.model.get("number");
      if (id_number > 1)
      {      
        summary_item = this.model.get("summary") - this.model.get("cost");
        this.model.set({number: --id_number, summary: summary_item});
        
        this.render(this.model.toJSON());
        Backbone.Mediator.pub("changeTotalSum", {action: "sub", 
                                                 value: this.model.get("cost")});
      }
  },
  
  increaseItem: function() {
    var id_number = this.model.get("number");
	var summary_item = this.model.get("summary") +this.model.get("cost");
	
    this.model.set("number", id_number += 1);
	this.model.set("summary", summary_item);
    
    console.log(summary_item);
    this.render(this.model.toJSON());
    
    
	Backbone.Mediator.pub("changeTotalSum", {action: "add", 
                                           value: this.model.get("cost")});
  },
  
  changeStatus: function() {
    if(this.model.get("delivered") == 0){
      this.model.set("delivered", 1);
      this.$el.css("text-decoration", "line-through"); 
    } else {
      this.model.set("delivered", 0);
      this.$el.css("text-decoration", "none"); 
    }
    
  }

});