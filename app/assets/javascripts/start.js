var Waiter = {
  Tables: {},
  Menu: {},
  Order: {},
  User: {}
};

Waiter.Order.OrderCollection = new OrderCollection();
Waiter.Tables.TableCollection = new TableCollection();
Waiter.AppView = new AppView();

$(function(){ Waiter.AppView.render(); });