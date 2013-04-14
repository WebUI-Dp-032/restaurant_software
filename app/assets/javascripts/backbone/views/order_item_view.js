(function () {
  window.RS.Views.OrderItemView = Backbone.View.extend({

  tagName: "tr",
  className: "order-item",

  template: JST['backbone/templates/order_item_template'],

  events: {
    "click #minus_rows" : "delItem",
    "click #decrease" : "decreaseItem",
    "click .overflow" : "changeStatus",
    "click #increase" : "increaseItem"
  },

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  delItem: function() {
      var summary = this.model.get("summary");
      this.model.destroy();
      this.remove();
      Backbone.Mediator.pub("order_model_change_total", {action: "sub", value:summary});
  },

  decreaseItem: function() {
    this.model.decrementFood();
  },

  increaseItem: function() {
    this.model.incrementFood();
  },

  changeStatus: function() {
    this.model.toggleStatus();
  }

});
})();
