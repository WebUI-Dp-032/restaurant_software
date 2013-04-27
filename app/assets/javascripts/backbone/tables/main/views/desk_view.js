(function() {
  window.RS.Views.DeskView = Backbone.View.extend({

    template: _.template("<span><%= name %></span>"),

    render: function() {
      this.$el.css({
        'position':'absolute',
        'left': this.model.get('position_x'),
        'top':this.model.get('position_y')
      });

      this.$el.addClass(this.model.get('form'));
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
})();