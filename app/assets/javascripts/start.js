var Waiter = {
  Tables: {},
  Menu: {},
  Order: {},
  User: {}
};

Waiter.Order.OrderCollection = new OrderCollection();
Waiter.AppView = new AppView();

$(function(){ Waiter.AppView.render(); });