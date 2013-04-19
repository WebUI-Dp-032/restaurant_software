(function (FoodsCollection, OrderItemView) {
  window.RS.Views.FoodsView = Backbone.View.extend({
    tagName: "div",
    className: "wrap",

    template: JST['backbone/order/templates/order'],

    initialize: function() {
      this.collection = new FoodsCollection();
      this.collection.on('reset', this.renderAll, this);
      this.collection.on('add', this.renderOne, this);
      Backbone.Mediator.sub('selectTable', this.clearView, this);
      Backbone.Mediator.sub('foods_view_save_prepared_food', this.savePrepared, this);
      Backbone.Mediator.sub('foods_view_prepare_food', this.prepareFood, this);
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
      self = this;
      this.collection.each(function(model) {
        self.renderOne(model);
      });
    },

    clearView: function() {
      $("#order-items").html("");
      this.collection.clear();
    },

    prepareFood: function(food) {
      this.food = food;
    },

    savePrepared: function(order_id) {
      this.food.order_id = order_id;
      this.collection.addFood(this.food);
      this.food = null;
    },

    saveFood: function(food) {
      this.collection.addFood(food); // FIX!
    },

    loadFoods: function(order_id) {
      this.collection.loadFoods(order_id);
    }
  });

})(
window.RS.Collections.FoodsCollection,
window.RS.Views.OrderItemView
);