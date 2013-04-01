var AppView = Backbone.View.extend({
  el: $("#container"),

  template: JST['backbone/templates/PageTemplate'],

  render: function() {
    Waiter.Tables.TablesView = new TablesView(),
    Waiter.Menu.MenuView = new MenuView(),
    Waiter.Order.OrderView = new OrderView();
    $("#container").html(this.template());
    $("#tables-container").append(Waiter.Tables.TablesView.render().el);
    $("#menu-container").append(Waiter.Menu.MenuView.render().el);
    $("#order-container").append(Waiter.Order.OrderView.render().el);
  }

});