var TablesView = Backbone.View.extend({
  el: $("#tables-container"),

  template: JST['backbone/templates/TablesTemplate'],

  render: function() {
    $("#tables-container").html(this.template());
    return this;
  }

});