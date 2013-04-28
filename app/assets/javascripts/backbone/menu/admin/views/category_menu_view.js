(function (AdminCategoryView, CategoryCollection, CategoryModel, GroupCollection) {
  window.RS.Views.AdminCategoryMenuView = Backbone.View.extend({

    tagName: "div",
    className: "category-menu",
    template: JST['backbone/menu/admin/templates/category_menu_template'],

    events: {
      'click #add-category-btn'   : 'addCategory',
    },

    initialize: function() {
      // this.collection = new CategoryCollection(); 
      // this.groups = new GroupCollection();
      //this.collection.on('reset', this.renderOne, this);
      // this.collection.fetch();
      
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
        // this.view = new AdminCategoryView({model: model});
        // $('.acord-list').append(this.view.render());
        // this.collection.fetch();
        $("#show-category").hide("slow");

      }
    }

  });
})(window.RS.Views.AdminCategoryView, 
   window.RS.Collections.CategoryCollection,
   window.RS.Models.CategoryModel,
   window.RS.Collections.GroupCollection);