var AppView = Backbone.View.extend({
  el: $("html"),
  template: JST['backbone/templates/PageTemplate'],
 
  initialize: function() {
    $("#container").html(this.template());
   
    Waiter.Tables.TablesView = new TablesView(),
    Waiter.Menu.MenuView = new MenuView(),
    Waiter.Order.OrderView = new OrderView();
    
    $("#tables-container").append(Waiter.Tables.TablesView.render().el);
    $("#menu-container").append(Waiter.Menu.MenuView.render().el);
    $("#order-container").append(Waiter.Order.OrderView.render().el);
    

  },
  events: {
    "click #map": "showMap",
    "click .shadow": "hideMap"
  },

  showMap: function() {
      var mapView = new MapView();  
      $("body").append($("<div></div>").addClass("shadow"));
      $("body").append(mapView.render().el);
  },
  
  hideMap: function() {
      $(".shadow").remove();
      $(".map-view").remove();
  }

});