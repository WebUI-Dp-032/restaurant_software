var OrderCollection = Backbone.Collection.extend({

  model: OrderItemModel,
  url: "/orders/1.json",
  status: "",
  order:"",

  initialize: function() {
    Backbone.Mediator.sub("selectTable", this.loadOrder, this);
    Backbone.Mediator.sub("addFoodInOrder", this.addFood, this);
    Backbone.Mediator.sub("changeStateOfOrder", this.changeStatus, this);

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
    var item, model;
    if (this.existFood(food.title)) {
      model = this.where({title: food.title})[0];
      model.set({number: model.get('number') + 1 });
    } else {
      item = new OrderItemModel({title: food.title,
                                 cost: food.cost,
                                 summary: food.cost});
      this.add(item);
    }

    this.order.changeTotal({action: "add", value: food.cost});
    if (this.status === "free") {
      this.makeBusy();
      this.status = "busy";
    }
    if (item) {
      Backbone.Mediator.pub("addItemToOrder", item);
    }
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
      Backbone.Mediator.pub('showManageBlock');
    } else {
      Backbone.Mediator.pub('hideManageBlock');
    }
  },

  /**
  * Saving food in order
  */
  saveOrder: function() {
    var order_id = this.order.get("id");
    this.order.saveOrder();
    if (this.length > 0) {
      this.url = "/foods";
      this.forEach(function(food) {
        console.log("save food in order... id =", order_id);
        food.set({order_id: order_id});
        food.save();
      });
    }
  },


  changeStatus: function(status) {
    this.order.url = "/orders/" + this.order.get("id");
    this.saveOrder();
    console.warn(status, " order... id =", this.order.get("id"));
    this.order.save({status: status});
    // Waiter.Order.OrderCollection.status = "free";
    Backbone.Mediator.pub("tableIsFree", this.order.get("table_id"));
    Backbone.Mediator.pub("hideManageBlock");
  },

  existFood: function(food_title) {
    return (this.where({title: food_title}).length>0) ? true : false;
  }
});