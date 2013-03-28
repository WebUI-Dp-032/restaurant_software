var AppView = Backbone.View.extend({
  el: $("#container"),

  render: function() {
    var order_view = new OrderView();
    $("#container").append(order_view.render().el);
  }

});