(function (DeskCollection, TableItemView, MapView) {

  window.RS.Views.TablesView = Backbone.View.extend({

    tagName: "div",
    className: "wrap",

    template: JST['backbone/tables/main/templates/tables_template'],

    render: function() {
      this.$el.html(this.template());
      return this;
    },

    initialize: function() {
      this.collection = new DeskCollection();
      this.collection.on('reset', this.renderAll, this);
      this.collection.fetch();
    },

    renderOne: function(table) {
       var view = new TableItemView({model: table});
       $("#table-module").append(view.render().el);
    },


    renderAll: function() {
      this.collection.each(this.renderOne, this);
    }

  });
})(
window.RS.Collections.DeskCollection,
window.RS.Views.TableItemView,
window.RS.Views.MapView);

