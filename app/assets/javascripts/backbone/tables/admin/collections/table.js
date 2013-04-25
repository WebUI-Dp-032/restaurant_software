(function (TableModel) {

	window.RS.Collections.TableCollection = Backbone.Collection.extend({

    url:'/tables',
    model: TableModel
  });
  
})(window.RS.Models.TableModel);