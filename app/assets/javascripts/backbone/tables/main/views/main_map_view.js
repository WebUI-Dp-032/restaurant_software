(function (MapView) {
  window.RS.Views.MainMapView = Backbone.View.extend({
    el: $("html"),

    events: {
      "click #map": "showMap",
      "click .shadow": "hideMap"
    },

    showMap: function() {
        var mapView = new MapView();
        $("body").append($("<div></div>").addClass("shadow"));
        $("body").append($("<div></div>").addClass("map-box"));

        $(".map-box").append(mapView.render().el);
    },

    hideMap: function() {
        $(".shadow").remove();
        $(".map-box").remove();
    }

  });

})(window.RS.Views.MapView);