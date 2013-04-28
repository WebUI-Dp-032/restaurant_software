(function (CategoryModel) {
  window.RS.Collections.CategoryCollection = Backbone.Collection.extend({
    model: CategoryModel,
    url: "/categories",
    byGroup: function(group) {
    filtered = this.filter(function(category) {
      return category.get("attachment") === group;
      });
    return new window.RS.Collections.CategoryCollection(filtered);
    }

  });
})(
window.RS.Models.CategoryModel
);