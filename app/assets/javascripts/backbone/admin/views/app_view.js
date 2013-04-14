(function (TabView){

  window.RS.Views.AppView = Backbone.View.extend({
    el: $('#container'),

    template: JST['backbone/admin/templates/page_template'],

    initialize: function() {
      this.tab_view = new TabView();
    },

    render: function() {
      $('#container').html(this.template());
      $('#menu-container').append(this.tab_view.render().el);
    }

  });

})(
window.RS.Views.TabView
);