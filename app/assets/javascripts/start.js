var Waiter = {
  Tables: {},
  Menu: {},
  Order: {},
  User: {},
  Main: {}
};

Waiter.Tables.TableCollection = new TableCollection();
Waiter.Menu.GroupCollection = new GroupCollection();
Waiter.Menu.CategoryCollection = new CategoryCollection();
Waiter.Menu.ItemCollection = new ItemCollection();
Waiter.AppView = new AppView();

$(function(){ Waiter.AppView.render(); });