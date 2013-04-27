(function (ItemCollection,
          CategoryCollection,
           ChangeCategoryView) {

  window.RS.Views.AdminItemView = Backbone.View.extend({

    className: "accordion-group",
    template: JST['backbone/menu/admin/templates/item_template'],
    events: {
        "click #btn-dishes": "getItems",
        "click .btn-change-item": "saveItems",
        "click .btn-delete-item" : "delItem"
    },

    initialize: function () {

      this.categories_collection = new CategoryCollection();
      this.categories_collection.on("reset", this.getCategories, this);
      //this.groups_collection.reset(window.RS.Data.Groups);
      this.categories_collection.fetch();

      this.model.on('change', this.render, this);
      this.model.on('change:attachment', this.remove, this);
      this.model.on('destroy', this.remove, this);
      
    },


    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.getCategories();
        return this;
    },

    addOne: function(item) {
      var view = new ItemView({model: item});
      $("#items .accordion").append(view.render().el);
    },

    getItems: function() {
      var item_menu_view = new ItemMenuView();
      $("#items").html(item_menu_view.render().el);
      this.items_collection.byCategory(this.model.get("name")).each(this.addOne);
      return this;
    },

    saveItems: function () {
   
      var item = $.trim(this.$(".dishes-name").val());
      var category = $.trim(this.$(".edit-categories .active").text());
      var descr = $.trim(this.$(".dishes-discription").val());
      var price = $.trim(this.$(".dishes-price").val());
      this.model.save({name: item, attachment: category, description: descr, price: price});
      Backbone.Mediator.pub("renderMenu", {});
    },

    delItem: function () {
      this.model.destroy();
      this.remove();
    },

    addCategory: function(category) {
      var view = new ChangeCategoryView({model: category});
      $(".edit-categories").append(view.render().el);
    },

    getCategories: function() {
     $(".edit-categories").empty();
     this.categories_collection.each(this.addCategory);
     return this;
    },

  });
})(
window.RS.Collections.ItemCollection,
window.RS.Collections.CategoryCollection,
window.RS.Views.AdminChangeCategoryView);