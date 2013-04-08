var DeskView = Backbone.View.extend({
  
  template: _.template("<span><%= name %></span>"),

  render: function() {
    this.$el.css({
      'position':'absolute',
      'left': this.model.get('position_left'),
      'top':this.model.get('position_top')
    });
    
    this.$el.addClass("btn btn-info");
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
