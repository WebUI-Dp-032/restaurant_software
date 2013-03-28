var OrderView = Backbone.View.extend({
  // el: $("#order"),

  tagName: "div", 
  id: "order",
  template: JST['backbone/templates/OrderTemplate'],

  initialize: function() {
    Backbone.Mediator.sub("addItemToOrder", this.renderOne, this);
    Backbone.Mediator.sub("addAllFood", this.renderAll, this);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  renderOne: function(item) {
    var view = new OrderItemView({model: item});
    // this.$el.append(view.render().el);
    $("#order").append(view.render().el);
  },

  renderAll: function() {
    var collection = Weiter.Order.OrderCollection;
    collection.forEach(function(item) {
      Weiter.Order.OrderView.renderOne(item);
    });
  }



});