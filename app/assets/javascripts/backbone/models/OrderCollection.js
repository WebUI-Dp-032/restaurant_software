var OrderCollection = Backbone.Collection.extend({

  model: OrderItemModel,
  url: "/orders/1.json",
  status: "",
  order:"",

  initialize: function() {
    Backbone.Mediator.sub("selectTable", this.loadOrder, this);
    Backbone.Mediator.sub("addFoodInOrder", this.addFood, this);
    Backbone.Mediator.sub("cancelOrder", this.cancelOrder, this);
    Backbone.Mediator.sub("closeOrder", this.closeOrder, this);

    this.on("reset", this.addAllFood, this);
  },

  loadOrder: function(table) {
    if (this.status === "busy" ) { this.saveOrder(); }
    Backbone.Mediator.pub("clearOrderView");
    this.reset();
    this.status = table.status;

    this.order = new OrderModel({
      table_id: table.table_id
    });
    this.order.clearTotalSum();

    this.url = "/orders/" + table.table_id + ".json";
    this.fetch();
  },

  addFood: function(food) {
    var item = new OrderItemModel({title: food.title,
                                   cost: food.cost,
                                   summary: food.cost});
    this.add(item);
    this.order.addToTotal(food.cost);
    if (this.status === "free") {
      this.makeBusy();
      this.status = "busy";
    }
    Backbone.Mediator.pub("addItemToOrder", item);
  },
  
  addAllFood: function() {
    Backbone.Mediator.pub("addAllFood");
    this.makeBusy();
  },

  makeBusy: function() {
    if (this.length > 0) {
      if(this.status === "free") {
        this.order.createOrder();
      }
      if(this.status === "busy") {
        this.order.loadOrder(this.models[0].get("order_id"));
      }
    }
  },

  saveOrder: function() {
    var order_id = this.order.get("id");
    this.order.saveOrder();
    if (this.length > 0) {
      this.url = "/foods";
      this.forEach(function(food) {
        console.log("save food this.order_id", order_id);
        food.set({order_id: order_id});
        food.save();
      });
    }
  },

  cancelOrder: function() {
    this.saveOrder();
    this.order.url = "/orders/" + this.order.get("id");
    console.warn("url-cancel, id", this.order.get("id"));
    this.order.save({status: "cancelled"});
    this.status = "free";
    // Backbone.Mediator.pub("")
    console.log("Mediator.pub('tableIsFree')", this.order.get("table_id"));
  },

  closeOrder: function() {
    this.saveOrder();
    this.order.url = "/orders/" + this.order.get("id");
    console.warn("url-closed, id", this.order.get("id"));
    this.order.save({status: "closed"});
    this.status = "free";
    // Backbone.Mediator.pub("")
    console.log("Mediator.pub('tableIsFree')", this.order.get("table_id"));
  }

});