(function (CategoryModel) {
  window.RS.Collections.CategoryCollection = Backbone.Collection.extend({
    model: CategoryModel
  });
})(
window.RS.Models.CategoryModel
);