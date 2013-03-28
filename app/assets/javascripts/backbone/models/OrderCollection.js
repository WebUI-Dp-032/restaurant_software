var OrderCollection = Backbone.Collection.extend({

  model: OrderItemModel,
  localStorage: new Backbone.LocalStorage("OrderList"),
  table: 1,

  initialize: function() {
    Backbone.Mediator.sub("selectTable", this.loadOrder, this);
    Backbone.Mediator.sub("addFoodInOrder", this.addFood, this);
    this.on("reset", this.addAllFood, this);
  },

  calculateTotal: function() {

  },

  loadOrder: function(table) {
    this.reset();
    this.table = table;
    this.fetch();
  },

  parse: function(response) {
    var result = [];
    response.forEach(function(item) {
      if (item.table == Weiter.Order.OrderCollection.table) {
        result.push(item);
      }
    });

    return result;
  },

  addFood: function(food) {
    var item = new OrderItemModel({table: this.table,
                                   title: food.title,
                                   cost: food.cost,
                                   number: 1});
    this.add(item);
    Backbone.Mediator.pub("addItemToOrder", item);
  },

  addAllFood: function() {
    Backbone.Mediator.pub("addAllFood");
  }

});