var OrderCollection = Backbone.Collection.extend({

  model: OrderItemModel,
  url: "/orders/1.json",
  table: 1,

  initialize: function() {
    Backbone.Mediator.sub("selectTable", this.loadOrder, this);
    Backbone.Mediator.sub("addFoodInOrder", this.addFood, this);
    this.on("reset", this.addAllFood, this);
  },

  calculateTotal: function() {

  },

  loadOrder: function(table) {
    Backbone.Mediator.pub("clearOrderView");
    this.reset();
    this.table = table;
    this.url = "/orders/" + table + ".json";
    this.fetch();
  },

  addFood: function(food) {
    var item = new OrderItemModel({table_id: this.table,
                                   title: food.title,
                                   cost: food.cost,
                                   summary: food.cost,
                                   number: 1});
    this.add(item);
    Backbone.Mediator.pub("addItemToOrder", item);
  },

  addAllFood: function() {
    Backbone.Mediator.pub("addAllFood");
  }

});