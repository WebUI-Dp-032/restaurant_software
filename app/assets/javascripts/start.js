var Waiter = {
  Tables: {},
  Menu: {},
  Order: {},
  User: {}
};



$(function(){ 
	Waiter.Order.OrderCollection = new OrderCollection();
	Waiter.Tables.TableCollection = new TableCollection();
	Waiter.AppView = new AppView();
	
});