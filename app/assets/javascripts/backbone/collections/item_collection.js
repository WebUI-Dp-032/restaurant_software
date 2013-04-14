(function (ItemModel) {
  window.RS.Collections.ItemCollection = Backbone.Collection.extend({
      model: ItemModel
  });
})(
window.RS.Models.ItemModel
);