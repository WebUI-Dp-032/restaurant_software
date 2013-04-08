var AppView = Backbone.View.extend({
  el: $("#container"),

  template: JST['backbone/templates/PageTemplate'],

  render: function() {
    Waiter.Tables.TablesView = new TablesView(),
    Waiter.Menu.MenuView = new MenuView(),
    Waiter.Order.FoodsView = new FoodsView();
    Waiter.Order.TotalView = new TotalView();
    $("#container").html(this.template());
    $("#tables-container").append(Waiter.Tables.TablesView.render().el);
    $("#menu-container").append(Waiter.Menu.MenuView.render().el);
    $("#order-container").append(Waiter.Order.FoodsView.render().el);
    Waiter.Menu.MenuView.addAll();
    $("#order-module").append(Waiter.Order.TotalView.render().el);
  }

});