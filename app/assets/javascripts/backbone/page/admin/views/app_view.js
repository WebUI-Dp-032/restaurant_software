(function (AdminTabView){

  window.RS.Views.AdminAppView = Backbone.View.extend({
    el: $('#container'),

    template: JST['backbone/page/admin/templates/page_template'],

    initialize: function() {
      this.tab_view = new AdminTabView();
    },

    render: function() {
      $('#container').html(this.template({username: window.RS.username}));
      $('#menu-container').append(this.tab_view.render().el);
    }

  });

})(
window.RS.Views.AdminTabView
);