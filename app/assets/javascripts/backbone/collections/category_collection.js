(function (CategoryModel) {
  window.RS.Collections.CategoryCollection = Backbone.Collection.extend({
    model: CategoryModel,
    url: "/categories"
  });
})(
window.RS.Models.CategoryModel
);