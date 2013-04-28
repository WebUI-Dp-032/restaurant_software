(function (ChangeGroup,
           GroupCollection
           ) {
  window.RS.Views.AdminChangeGroupView = Backbone.View.extend({

    tagName: "button",
    className: "btn btn-primary",

    template: JST['backbone/menu/admin/templates/change_group_template'],

    render: function (group_name) {
      if(group_name === this.model.get("name")) { 
        this.$el.addClass("active");
      }
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });
})(
window.RS.Views.AdminChangeGroupView,
window.RS.Collections.GroupCollection
);