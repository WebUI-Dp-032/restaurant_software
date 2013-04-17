(function (AdminPersonalView,
           AdminHallView,
           AdminMenuView){

  window.RS.Views.AdminTabView = Backbone.View.extend({

    className: 'row',
    template: JST['backbone/admin/templates/tab_template'],

    events: {
      'click #personal-link': 'renderPersonal',
      'click #hall-link'    : 'renderHall',
      'click #menu-link'    : 'renderMenu'
    },

    initialize: function() {
      
    },

    render: function() {
      this.$el.html(this.template());
      this.tab_content = this.$('#tab-body .tab-content');
      this.renderPersonal();
      return this;
    },

    renderPersonal: function() {
      var personal_view = new AdminPersonalView();
      this.tab_content.html(personal_view.render().el);
      return this;
    },

    renderHall: function() {
      var hall_view = new AdminHallView();
      this.tab_content.html(hall_view.render().el);
      return this;
    },

    renderMenu: function() {
      var menu_view = new AdminMenuView();
      this.tab_content.html(menu_view.render().el);

      return this;
    }

  });

})(
window.RS.Views.AdminPersonalView,
window.RS.Views.AdminHallView,
window.RS.Views.AdminMenuView
);