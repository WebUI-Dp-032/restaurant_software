var MenuView = Backbone.View.extend({
  // el: $("#menu-container"),

  tagName: "div",
  className: "wrap",

  template: JST['backbone/templates/MenuTemplate'],

  render: function() {
    $("#menu-container").html(this.template());
    return this;
  }

});