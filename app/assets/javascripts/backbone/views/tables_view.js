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
      this.collection.bind('reset', this.renderAll, this);
      this.collection.fetch();
    },

    renderOne: function(table) {
       var view = new TableItemView({model: table});
       $("#table-module").append(view.render().el);
    },


    renderAll: function() {
      this.collection.each(this.renderOne);
    }

  });
})(
window.RS.Collections.TableCollection,
window.RS.Views.TableItemView,
window.RS.Views.MapView);

