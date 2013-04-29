(function (FoodModel) {
  window.RS.Collections.FoodsCollection = Backbone.Collection.extend({

    model: FoodModel,
    url: '/foods',
    order_id: '',

    loadFoods: function(order_id) {
      this.order_id = order_id;
      this.url = '/foods/get_foods_by_order/' + order_id + '.json';
      this.fetch();
      this.url = '/foods';
    },

    addFood: function(food) {
      var model;
      if (this.existFood(food.title)) {
        model = this.where({title: food.title})[0];
        model.incrementFood();
      } else {
        model = new FoodModel({order_id: food.order_id,
                               title: food.title,
                               cost: food.cost,
                               summary: food.cost});
        this.create(model);
        Backbone.Mediator.pub('order_model_change_total', {action: 'add', value: food.cost});
      }
    },

    existFood: function(food_title) {
      return (this.where({title: food_title}).length > 0) ? true : false;
    },

    clear: function() {
      this.reset();
    }

  });
})(
window.RS.Models.FoodModel
);