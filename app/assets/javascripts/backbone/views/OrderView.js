var OrderView = Backbone.View.extend({
   el: $("#order-container"),
  tagName: "div",
  className: "wrap",

  template: JST['backbone/templates/OrderTemplate'],
  
    event: {
    "click #clear_order" : "clearOrder"
  },

  events: {
    "click #cancel_order" : "cancelOrder",
    "click #close_order" : "closeOrder"
  },

  initialize: function() {
    Backbone.Mediator.sub("addItemToOrder", this.renderOne, this);
    Backbone.Mediator.sub("addAllFood", this.renderAll, this);
    Backbone.Mediator.sub("clearOrderView", this.clearView, this);
    Backbone.Mediator.sub("changeTotal", this.renderTotal, this);
  },

  render: function() {
    var total = Weiter.Order.OrderCollection.total;
    this.$el.html(this.template({total: 0}));
    return this;
  },

  renderOne: function(item) {
    var view = new OrderItemView({model: item});
    $("#order-items").append(view.render().el);
  },

  renderAll: function() {
    var collection = Weiter.Order.OrderCollection;
    collection.forEach(function(item) {
      Weiter.Order.OrderView.renderOne(item);
    });
  },

  renderTotal: function() {
    $("#total").html(Weiter.Order.OrderCollection.order.get("total"));
  },

  clearView: function() {
    $("#order-items").html("");
  },
  
  clearOrder: function() {
    Weiter.Order.OrderCollection.url = "orders/" ;
    Weiter.Order.OrderCollection.clearTotalSum();
    
      // this.model.destroy({success: function(model, response) {      
          // console.log ("Success");
          // },
        // error: function(model, response){
          // console.log ("Error");
        // }
      // });
    $("#order-items").html("");
    $("#total").html("0");
  },

  cancelOrder: function() {
    console.warn("cancelled");
    Backbone.Mediator.pub("cancelOrder");
    this.clearView();
  },

  closeOrder: function() {
    console.log("closed!");
    Backbone.Mediator.pub("closeOrder");
    this.clearView();
  },

  allclick: function() {
    console.error("click");
  }
});