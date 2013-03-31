var OrderModel = Backbone.Model.extend({

  defaults: {
    table_id: "",
    status: "opened",
    total: 0
  },

  order_id: "",

  url: "/orders",

  initialize: function() {
    Backbone.Mediator.sub("deleteItemSum", this.subFromTotal, this);
  },

  createOrder: function() {
    this.url = "/orders";
    Backbone.Mediator.pub("tableIsBusy", this.table_id);
    this.status = "opened";
    this.save();
  },

  loadOrder: function(order) {
    this.url = "/orders/get_order/" + order + ".json";
    this.on("change", function() {
      Backbone.Mediator.pub("changeTotal");
    });
    this.fetch();
  },

  saveOrder: function() {
    console.warn("url-save, id", this.get("id"));
    this.url = "/orders/" + this.get("id");
    this.save();
  },

  addToTotal: function(sum) {
    this.set({total: this.get("total") + sum });
    Backbone.Mediator.pub("changeTotal");
  },

  subFromTotal: function(sum) {
    this.set({total: this.get("total") - sum });
    Backbone.Mediator.pub("changeTotal");
  },

  clearTotalSum: function() {
    this.set({total: 0});
    Backbone.Mediator.pub("changeTotal");
  }



});