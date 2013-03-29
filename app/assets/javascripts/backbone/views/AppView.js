var AppView = Backbone.View.extend({
  el: $("#container"),

  template: JST['backbone/templates/PageTemplate'],

  render: function() {
    Weiter.Tables.TablesView = new TablesView(),
    Weiter.Menu.MenuView = new MenuView(),
    Weiter.Order.OrderView = new OrderView();
    $("#container").html(this.template());
    $("#tables-container").append(Weiter.Tables.TablesView.render().el);
    $("#menu-container").append(Weiter.Menu.MenuView.render().el);
    $("#order-container").append(Weiter.Order.OrderView.render().el);
  }

});