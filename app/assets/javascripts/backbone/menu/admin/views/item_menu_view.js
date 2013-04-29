(function (ItemMenuView, 
           ItemCollection,
           ItemModel
           ) {
  window.RS.Views.AdminItemMenuView = Backbone.View.extend({

    tagName: "div",
    className: "item-menu",
    template: JST['backbone/menu/admin/templates/item_menu_template'],

    events: {
      'click #add-dishes-btn' : 'addDish',
      'click #create-dishes-btn' : 'createDish'
    },

    initialize: function(options) {
      this.categories = options.categories;
      this.collection.on('add', this.getItems, this);
    },

    render: function () {
        this.$el.html(this.template({categories: this.categories}));
        return this;
    },

    // addOne: function(item) {
    //   var view = new ItemView({model: item});
    //   $("#items .accordion").append(view.render().el);
    // },

    // getItems: function() {
    //   debugger;
    //   event.stopPropagation();
    //   $(".menu-categories ul").children().remove();
    //   var sortedItems = this.collection.where({attachment: this.id});
    //   _.each(sortedItems, this.addOne, this);
    // },

    addDish: function() {
      $("#show-dishes").show("slow");
      $("#add-dishes-btn").hide("slow");

    },

    createDish: function() {
      var model = new ItemModel();

      model.set({name: $.trim(this.$("#dishes-name").val()),
                 attachment: $.trim(this.$("#select-category").val()),
                 description: $.trim(this.$("#dishes-description").val()),
                 image_url: $.trim(this.$("#dishes-image").val()),
                 price: $.trim(this.$("#dishes-price").val())});

      this.collection.create(model);
      
      $("#show-dishes").hide("slow");
      $("#add-dishes-btn").show("slow");

    }

  });
})(
window.RS.Views.AdminItemMenuView,
window.RS.Collections.ItemCollection,
window.RS.Models.ItemModel
);