var OrderItemModel = Backbone.Model.extend({

  defaults: {
    order_id: "",
    title: "",
    cost: 0,
    summary: 0,
    number: 1,
    delivered: 0
  }

});