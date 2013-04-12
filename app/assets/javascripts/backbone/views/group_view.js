(function (CategoryView, CategoryCollection) {
  window.RS.Views.GroupView = Backbone.View.extend({

  tagName: "li",
  className: "menu-group",
  template: JST['backbone/templates/group_template'],
  events: {
      "click": "getCategories"
  },

  initialize: function() {
    this.categories = new CategoryCollection();
    this.categories.reset(window.Waiter.Menu.Categories);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  addOne: function(category) {
    var view = new CategoryView({model: category, id: category.get("name")});
    var element = $("li#"+category.get('attachment')+" ul.categories");
    element.append(view.render().el, this);
  },

  getCategories: function() {
    event.stopPropagation();
    $(".menu-group ul").children().remove();
    var sortedCategories = this.categories.where({attachment: this.id});
    _.each(sortedCategories, this.addOne, this);
  }

});
})(
window.RS.Views.CategoryView,
window.RS.Collections.CategoryCollection
);
