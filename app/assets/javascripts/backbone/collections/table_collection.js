(function (TableItemModel){
  window.RS.Collections.TableCollection = Backbone.Collection.extend({

    url:'/tables',

    model: TableItemModel,

    initialize: function() {
      Backbone.Mediator.sub("tableIsBusy", this.busyTable, this);
      Backbone.Mediator.sub("tableIsFree", this.freeTable, this);
    },

    busyTable: function(table_id) {
      console.log("busy", "table", table_id);
      Waiter.Tables.TableCollection.forEach(function(item) {
        if (item.get("id") == table_id) {
        item.save({status: "busy"});
        }
        });
    },

    freeTable : function(table_id) {
      console.log("free", "table", table_id);

       Waiter.Tables.TableCollection.forEach(function(item) {
       if (item.get("id") == table_id) {
       item.save({status: "free"});
       }
       });
    }

  });
})(window.RS.Models.TableItemModel);