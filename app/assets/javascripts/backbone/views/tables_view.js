(function (TableCollection, TableItemView, MapView) {

  window.RS.Views.TablesView = Backbone.View.extend({

    tagName: "div",
    className: "wrap",

    template: JST['backbone/templates/tables_template'],

    render: function() {
      this.$el.html(this.template());
      return this;
    },

    initialize: function() {
      this.collection = new TableCollection();
      this.collection.on('reset', this.renderAll, this);
      this.collection.fetch();
      // ################################################################+++################
      // should be removed, for tests only
       // this.collection.reset([{"created_at":"2013-04-14T15:04:42Z","id":1,"name":"1","position_x":100,"position_y":100,"status":"free","updated_at":"2013-04-14T18:48:13Z"},{"created_at":"2013-04-14T15:04:42Z","id":2,"name":"2","position_x":100,"position_y":200,"status":"free","updated_at":"2013-04-14T15:04:42Z"},{"created_at":"2013-04-14T15:04:42Z","id":3,"name":"3","position_x":300,"position_y":300,"status":"free","updated_at":"2013-04-14T15:04:42Z"},{"created_at":"2013-04-14T15:04:42Z","id":4,"name":"4","position_x":200,"position_y":100,"status":"free","updated_at":"2013-04-14T15:04:42Z"},{"created_at":"2013-04-14T15:04:42Z","id":5,"name":"5","position_x":300,"position_y":100,"status":"free","updated_at":"2013-04-14T15:04:42Z"},{"created_at":"2013-04-14T15:04:42Z","id":6,"name":"6","position_x":500,"position_y":250,"status":"free","updated_at":"2013-04-14T15:04:42Z"},{"created_at":"2013-04-14T15:04:42Z","id":7,"name":"7","position_x":500,"position_y":150,"status":"free","updated_at":"2013-04-14T15:04:42Z"},{"created_at":"2013-04-14T15:04:42Z","id":8,"name":"8","position_x":400,"position_y":150,"status":"free","updated_at":"2013-04-14T15:04:42Z"}]);
      // ################################################################################
    },

    renderOne: function(table) {
       var view = new TableItemView({model: table});
       $("#table-module").append(view.render().el);
    },


    renderAll: function() {
      console.log('renderall');
      this.collection.each(this.renderOne, this);
    }

  });
})(
window.RS.Collections.TableCollection,
window.RS.Views.TableItemView,
window.RS.Views.MapView);

