var Weiter = {
  Tables: {},
  Menu: {},
  Order: {},
  User: {}
};

Weiter.Order.OrderCollection = new OrderCollection();
Weiter.AppView = new AppView();

$(function(){ Weiter.AppView.render(); });