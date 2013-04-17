(function (TableCollection,
           TablesView,
           MenuView,
           TotalView,
           FoodsView,
           MainMapView,
           PopupView
           ){

  window.RS.Views.AppView = Backbone.View.extend({
    el: $("#container"),

    template: JST['backbone/templates/page_template'],

    initialize: function() {


      this.tables_view = new TablesView();
      this.menu_view = new MenuView();
      this.foods_view = new FoodsView();
      this.total_view = new TotalView();
      this.map_view = new MainMapView();
      this.popup_view = new PopupView();
    },

    render: function() {
      $("#container").html(this.template({username: window.RS.username}));
      $("#tables-container").append(this.tables_view.render().el);
      $("#menu-container").append(this.menu_view.render().el);
      // this.menu_view.addAll();
      $("#order-container").append(this.foods_view.render().el);
      $("#order-module").append(this.total_view.render().el);
    }

  });

})(
window.RS.Collections.TableCollection,
window.RS.Views.TablesView,
window.RS.Views.MenuView,
window.RS.Views.TotalView,
window.RS.Views.FoodsView,
window.RS.Views.MainMapView,
window.RS.Views.PopupView
);