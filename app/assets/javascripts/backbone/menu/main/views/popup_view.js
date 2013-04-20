(function () {
  window.RS.Views.PopupView = Backbone.View.extend({

  tagName: "div",
  id: "popup",
  className: "reveal-modal",
  template: JST['backbone/menu/main/templates/popup_view_template'],
  events: {
    "click" : "close"
  },

  initialize: function() {
    Backbone.Mediator.sub("popup", this.render, this);
  },

  render: function(data) {
    var view = this.$el.html(this.template({ data: data }));
    $("body").append(view);
    return this;
  },

  close: function () {
    this.el.remove();
  }
});
})();
