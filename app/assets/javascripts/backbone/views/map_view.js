(function (DeskCollection, DeskView) {
  window.RS.Views.MapView = Backbone.View.extend({
  tagName: "div",
  className: "map-view",

  initialize: function() {
    this.desks = new DeskCollection();
    this.desks.bind('reset', this.addAll, this);
    this.desks.fetch();
    },

  addAll: function() {
    $(".map-view").children().remove();
    this.desks.each(this.addOne);
  },

  addOne: function(desk) {
    var view = new DeskView({model: desk});
    $(".map-view").append(view.render().el);
  },

  render: function() {
    return this;
  }

});
})(
window.RS.Collections.DeskCollection,
window.RS.Views.DeskView
);
