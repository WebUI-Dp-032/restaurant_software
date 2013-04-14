(function (PersonalView,
           HallView,
           MenuView){

  window.RS.Views.TabView = Backbone.View.extend({

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
      this.clear();
      var personal_view = new PersonalView();
      this.tab_content.html(personal_view.render().el);
      return this;
    },

    renderHall: function() {
      this.clear();
      var hall_view = new HallView();
      this.tab_content.html(hall_view.render().el);
      return this;
    },

    renderMenu: function() {
      this.clear();
      var menu_view = new MenuView();
      this.tab_content.html(menu_view.render().el);
      return this;
    },

    clear: function() {
      this.tab_content.html('');
    }

  });

})(
window.RS.Views.PersonalView,
window.RS.Views.HallView,
window.RS.Views.MenuView
);