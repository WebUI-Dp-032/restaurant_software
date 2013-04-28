(function (GroupView,
           GroupCollection
           ) {

  window.RS.Views.AdminMenuView = Backbone.View.extend({

    className: 'tab-pane active',
    id: 'menu',
    template: JST['backbone/menu/admin/templates/menu_template'],

    initialize: function() {
        this.groups_collection = new GroupCollection();
        this.groups_collection.on('reset', this.addAll, this);
        //this.groups_collection.reset(window.RS.Data.Groups);
        Backbone.Mediator.sub('renderMenu', this.addAll, this);
        this.groups_collection.fetch();
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    },

    addOne: function(group) {
      var view = new GroupView({model: group});
      $("#groups").append(view.render().el);
    },

    addAll: function() {
     this.$("#groups").empty();
     this.groups_collection.each(this.addOne);
     return this;
    }

  });

})(
window.RS.Views.AdminGroupView,
window.RS.Collections.GroupCollection
);
