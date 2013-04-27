(function (ItemModel) {
  window.RS.Collections.ItemCollection = Backbone.Collection.extend({
    model: ItemModel,
    url: "/items",
    byCategory: function(category) {
    	filtered = this.filter(function(item) {
    		return item.get("attachment") === category;
    	});
    	return new window.RS.Collections.ItemCollection(filtered);
    }

  });
})(
window.RS.Models.ItemModel
);