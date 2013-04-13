(function (TableCollection,
           GroupCollection,
           CategoryCollection,
           ItemCollection,
           TablesView,
           MenuView,
           TotalView,
           FoodsView,
           MainMapView
           ){

  window.RS.Views.AppView = Backbone.View.extend({
    el: $("#container"),

    template: JST['backbone/templates/page_template'],

    initialize: function() {

      Waiter.Menu.GroupCollection = new GroupCollection();
      Waiter.Menu.CategoryCollection = new CategoryCollection();
      Waiter.Menu.ItemCollection = new ItemCollection();

      Waiter.Tables.TablesView = new TablesView();
      this.menu_view = new MenuView();
      this.foods_view = new FoodsView();
      this.total_view = new TotalView();
      this.map_view = new MainMapView();
    },

    render: function() {
      $("#container").html(this.template());
      $("#tables-container").append(Waiter.Tables.TablesView.render().el);
      $("#menu-container").append(this.menu_view.render().el);
      $("#order-container").append(this.foods_view.render().el);
      this.menu_view.addAll();
      $("#order-module").append(this.total_view.render().el);
    }

  });

})(
window.RS.Collections.TableCollection,
window.RS.Collections.GroupCollection,
window.RS.Collections.CategoryCollection,
window.RS.Collections.ItemCollection,
window.RS.Views.TablesView,
window.RS.Views.MenuView,
window.RS.Views.TotalView,
window.RS.Views.FoodsView,
window.RS.Views.MainMapView
);