(function (CategoryModel) {
  window.RS.Views.AdminCategoryMenuView = Backbone.View.extend({

    tagName: "div",
    className: "category-menu",
    template: JST['backbone/menu/admin/templates/category_menu_template'],

    events: {
      'click #add-category-btn'   : 'addCategory',
    },

    initialize: function() {
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    addCategory: function() {
      $("#show-category").show("slow");
      if ($('.category-name').val() !== '') {
        var name = $('.category-name').val(), 
            model;
        group = this.model.get('attachment');
        model = new CategoryModel({name: name, attachment:group});
        this.collection.create(model);
        $("#show-category").hide("slow");

      }
    }

  });
})(window.RS.Models.CategoryModel);