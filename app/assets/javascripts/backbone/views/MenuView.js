var MenuView = Backbone.View.extend({
  el: $("#menu-container"),

  template: JST['backbone/templates/MenuTemplate'],

  render: function() {
    $("#menu-container").html(this.template());
    return this;
  }

});