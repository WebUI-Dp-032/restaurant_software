(function (ItemMenuView, 
           ItemCollection
           ) {
  window.RS.Views.AdminItemMenuView = Backbone.View.extend({

    tagName: "div",
    className: "item-menu",
    template: JST['backbone/menu/admin/templates/item_menu_template'],

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    addOne: function(item) {
      var view = new ItemView({model: item});
      //    element = $("li#"+item.get('attachment')+" ul.items");
      $("#items .accordion").append(view.render().el);
    },

    getItems: function() {
      event.stopPropagation();
      $(".menu-categories ul").children().remove();
      var sortedItems = this.items_collection.where({attachment: this.id});
      _.each(sortedItems, this.addOne, this);
    }

  });
})(
window.RS.Views.AdminItemMenuView,
window.RS.Collections.ItemCollection
);