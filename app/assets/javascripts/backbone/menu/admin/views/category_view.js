(function (ItemView,
           ItemMenuView,
           ChangeGroupView,
           ItemCollection,
           GroupCollection,
           CategoryCollection
           ) {
  window.RS.Views.AdminCategoryView = Backbone.View.extend({

    className: "accordion-group",
    template: JST['backbone/menu/admin/templates/category_template'],
    events: {
        "click .btn-show-items": "getItems",
        "click .btn-save-edited-category": "saveEditedCategory",
        "click .btn-delete-category": "deleteCategory"
    },

    initialize: function() {
      this.items_collection = new ItemCollection();
      this.items_collection.fetch();

      this.groups_collection = new GroupCollection();
      this.groups_collection.on("reset", this.getGroups, this);
      //this.groups_collection.reset(window.RS.Data.Groups);
      this.groups_collection.fetch();

      this.model.on('change', this.render, this);
      this.model.on('change:attachment', this.remove, this);
      this.model.on('destroy', this.remove, this);
      this.items_collection.on('add', this.getItems, this);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.getGroups();

        return this;
    },

    addItem: function(item) {
      
      var view = new ItemView({model: item});
      $("#items").append(view.render().el);
    },

    getItems: function() {
      this.clean();
      var view_head = new ItemMenuView({categories: this.collection.models,
                                        collection: this.items_collection});
      
      $("#add-dishes-form").html(view_head.render().el);
      this.items_collection.byCategory(this.model.get("name")).each(this.addItem, this);
      return this;
      
    },

    addGroup: function(group) {
      var view = new ChangeGroupView({model: group});
      $(".edit-groups").append(view.render().el);
    },

    getGroups: function() {
     $(".edit-groups").empty();
     this.groups_collection.each(this.addGroup);
     return this;
    },

    saveEditedCategory: function () {
      var group_name = $.trim(this.$(".edit-groups .active").text());
      var category_name = $.trim(this.$(".category-name").val());
      //this.model.set({attachment: group_name, name: category_name});
      this.model.save({attachment: group_name, name: category_name});
      Backbone.Mediator.pub("renderMenu", {});
      return this;
    },

    deleteCategory: function () {
      this.model.destroy();
      this.remove();
      return this;
    },

    clean: function () {
      $("#items").empty();
    }

  });
})(
window.RS.Views.AdminItemView,
window.RS.Views.AdminItemMenuView,
window.RS.Views.AdminChangeGroupView,
window.RS.Collections.ItemCollection,
window.RS.Collections.GroupCollection,
window.RS.Collections.CategoryCollection

);