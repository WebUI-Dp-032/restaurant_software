
var CategoryView = Backbone.View.extend({

      tagName: "li",
      className: "menu-categories",
      template: JST['backbone/templates/category_template'],
      events: {
          "click": "getItems"
      },

      initialize: function() {
        this.items = new ItemCollection();
        this.items.reset(window.Waiter.Menu.Items);
      },

      render: function () {
          this.$el.html(this.template(this.model.toJSON()));
          return this;
      },

      addOne: function(item) {
        var view = new ItemView({model: item}),
            element = $("li#"+item.get('attachment')+" ul.items");
        element.append(view.render().el);
      },

      getItems: function() {
        event.stopPropagation();
        $(".menu-categories ul").children().remove(); 
        var sortedItems = this.items.where({attachment: this.id});
        _.each(sortedItems, this.addOne, this);
      }
      
  });
  
  
 