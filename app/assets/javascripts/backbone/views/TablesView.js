var TablesView = Backbone.View.extend({
  // el: $("#tables-container"),

  tagName: "div",
  className: "wrap",

  template: JST['backbone/templates/TablesTemplate'],

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});