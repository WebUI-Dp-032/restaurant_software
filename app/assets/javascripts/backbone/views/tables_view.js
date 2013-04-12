(function (TableItemView) {
  window.RS.Views.TablesView = Backbone.View.extend({

    tagName: "div",
    className: "wrap",

    template: JST['backbone/templates/tables_template'],

    render: function() {
      this.$el.html(this.template());
      return this;
    },

    initialize: function() {
      Waiter.Tables.TableCollection.bind('reset', this.renderAll, this);
      Waiter.Tables.TableCollection.fetch();
    },

    renderOne: function(table) {
       var view = new TableItemView({model: table});
       $("#table-module").append(view.render().el);
    },


    renderAll: function() {
      Waiter.Tables.TableCollection.each(this.renderOne);
    }

  });
})(window.RS.Views.TableItemView);
