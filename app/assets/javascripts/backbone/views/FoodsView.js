var FoodsView = Backbone.View.extend({
  tagName: "div",
  className: "wrap",

  template: JST['backbone/templates/OrderTemplate'],

  initialize: function() {
    this.collection = new FoodsCollection();
    this.collection.on('reset', this.renderAll, this);
    this.collection.on('add', this.renderOne, this);
    Backbone.Mediator.sub('selectTable', this.clearView, this);
    Backbone.Mediator.sub('foods_view_save_prepared_food', this.savePrepared, this);
    Backbone.Mediator.sub('foods_view_save_food', this.saveFood, this);

    Backbone.Mediator.sub('foods_view_clear_view', this.clearView, this);
    Backbone.Mediator.sub('foods_view_load_foods', this.loadFoods, this);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  renderOne: function(item) {
    var view = new OrderItemView({model: item});
    $("#order-items").append(view.render().el);
  },

  renderAll: function() {
    this.collection.each(function(model) {
      Waiter.Order.FoodsView.renderOne(model);
    });
  },

  clearView: function() {
    $("#order-items").html("");
    this.collection.clear();
  },

  savePrepared: function() {
    this.collection.addFood(this.food);
    this.food = null;
  },

  saveFood: function(food) {
    this.collection.addFood(food);
  },

  loadFoods: function(order_id) {
    this.collection.loadFoods(order_id);
  }


});