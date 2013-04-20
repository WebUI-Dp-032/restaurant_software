(function (ItemModel) {
  window.RS.Collections.ItemCollection = Backbone.Collection.extend({
      model: ItemModel,
      url: "/items"
  });
})(
window.RS.Models.ItemModel
);