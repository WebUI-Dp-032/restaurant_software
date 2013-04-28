(function (ChangeCategory,
           CategoryCollection
           ) {
  window.RS.Views.AdminChangeCategoryView = Backbone.View.extend({

    tagName: "button",
    className: "btn btn-primary",

    template: JST['backbone/menu/admin/templates/change_category_template'],

    render: function (category_name) {
      console.log(category_name);
      console.log(this.model);
      if(category_name === this.model.get("name")) { 
        this.$el.addClass("active");
      }
      console.log("render change");
      console.log(this.model);
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });
})(
window.RS.Views.AdminChangeCategoryView,
window.RS.Collections.CategoryCollection
);