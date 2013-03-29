var OrderView = Backbone.View.extend({
  el: $("#order-container"),

  template: JST['backbone/templates/OrderTemplate'],

  initialize: function() {
    Backbone.Mediator.sub("addItemToOrder", this.renderOne, this);
    Backbone.Mediator.sub("addAllFood", this.renderAll, this);
    Backbone.Mediator.sub("clearOrderView", this.clearView, this);

  },

  render: function() {
    var total = Weiter.Order.OrderCollection.total;
    $("#order-container").html(this.template({total: total}));
    return this;
  },

  renderOne: function(item) {
    var view = new OrderItemView({model: item});
    // this.$el.append(view.render().el);
    $("#order-items").append(view.render().el);
    $("#total").html(Weiter.Order.OrderCollection.total);
  },

  renderAll: function() {
    var collection = Weiter.Order.OrderCollection;
    collection.forEach(function(item) {
      Weiter.Order.OrderView.renderOne(item);
    });
    $("#total").html(Weiter.Order.OrderCollection.total);
  },

  clearView: function() {
    $("#order-items").html("");
  }



});