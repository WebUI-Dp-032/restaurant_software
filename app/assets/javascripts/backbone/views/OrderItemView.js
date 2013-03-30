var OrderItemView = Backbone.View.extend({

  tagName: "tr",
  className: "order-item",

  template: JST['backbone/templates/OrderItemTemplate'],

  events: {
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
  }

});