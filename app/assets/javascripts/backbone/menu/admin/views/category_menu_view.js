(function () {
  window.RS.Views.AdminCategoryMenuView = Backbone.View.extend({

    tagName: "div",
    className: "category-menu",
    template: JST['backbone/menu/admin/templates/category_menu_template'],

    render: function () {
        this.$el.html(this.template());
        return this;
    }

  });
})();