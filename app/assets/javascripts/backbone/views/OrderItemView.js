var OrderItemView = Backbone.View.extend({

  tagName: "tr",
  className: "order-item",

  template: JST['backbone/templates/OrderItemTemplate'],

  events: {

  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }


});