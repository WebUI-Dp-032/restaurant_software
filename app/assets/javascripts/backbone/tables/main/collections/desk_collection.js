(function (DeskModel) {
  window.RS.Collections.DeskCollection = Backbone.Collection.extend({
    url:'/tables',
    model: DeskModel,

    initialize: function() {
      Backbone.Mediator.sub("tableIsBusy", this.busyTable, this);
      Backbone.Mediator.sub("tableIsFree", this.freeTable, this);
    },

    busyTable: function(table_id) {
      console.log("busy", "table", table_id);

      this.forEach(function(item) {

        if (item.get("id") == table_id) {
        item.save({status: "busy"});
        }
        });
    },

    freeTable : function(table_id) {
      console.log("free", "table", table_id);


       this.forEach(function(item) {
         if (item.get("id") == table_id) {
         item.save({status: "free"});
       }
       });
    }
  });
})(window.RS.Models.DeskModel);
