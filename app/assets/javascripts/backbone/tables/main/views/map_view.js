(function (DeskCollection, DeskView, MapModel) {
  window.RS.Views.MapView = Backbone.View.extend({

  initialize: function() {
    var self = this;
    
    this.model = new MapModel();
    this.model.fetch({
      success: function (data) {
        self.$el.addClass(data.get("value"));
      }
    });
   

    this.desks = new DeskCollection();
    
    this.desks.on('reset', this.addAll, this);

    this.desks.fetch();
    
  
  },

  addAll: function() { 
    this.$el.children().remove();
    this.desks.each(this.addOne, this);
  },

  addOne: function(desk) {
    var view = new DeskView({model: desk});
    this.$el.append(view.render().el);
  },

  render: function() {
    return this;
  }

});
})(
window.RS.Collections.DeskCollection,
window.RS.Views.DeskView,
window.RS.Models.MapModel
);
