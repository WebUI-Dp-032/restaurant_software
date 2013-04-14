(function (GroupView, GroupCollection) {
  window.RS.Views.MenuView = Backbone.View.extend({

    tagName: "div",
    className: "wrap",
    template: JST['backbone/templates/menu_template'],

    initialize: function() {
        this.groups = new GroupCollection();
        this.groups.reset(window.Waiter.Menu.Groups);
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    },

    addOne: function(group) {
      var view = new GroupView({model: group, id: group.get("name")});
      $("ul#menu").append(view.render().el);
    },

    addAll: function() {
     this.groups.each(this.addOne);
     return this;
    }

  });
})(
window.RS.Views.GroupView,
window.RS.Collections.GroupCollection
);
