var OrderModel = Backbone.Model.extend({

  defaults: {
    table_id: "",
    status: "opened",
    total: 0
  },

  order_id: "",

  url: "/orders",

  initialize: function() {
    Backbone.Mediator.sub("changeTotalSum", this.changeTotal, this);
  },

  createOrder: function() {
    this.url = "/orders";
    Backbone.Mediator.pub("tableIsBusy", this.get("table_id"));
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

  /**
  * Saving order 
  */
  saveOrder: function() {
    console.warn("saving order... id = ", this.get("id"));
    this.url = "/orders/" + this.get("id");
    this.save();
  },


  clearTotalSum: function() {
    this.set({total: 0});
    Backbone.Mediator.pub("changeTotal");
  },


  changeTotal: function(options) {
    switch (options.action) {
      case 'add' : this.set({total: this.get("total") + options.value }); break;
      case 'sub' : this.set({total: this.get("total") - options.value }); break;
    }
    Backbone.Mediator.pub("changeTotal");

  }



});