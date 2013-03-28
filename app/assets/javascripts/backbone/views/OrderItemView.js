var OrderItemView = Backbone.View.extend({

  tagName: "div",
  className: "order-item",

  // template: _.template("<%= title %> <%= number %> <%= cost %> грн."),
  template: JST['backbone/templates/OrderItemTemplate'],




  events: {

  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }


});