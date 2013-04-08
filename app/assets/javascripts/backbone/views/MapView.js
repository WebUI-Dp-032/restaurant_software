var desks = new DeskCollection();

var MapView = Backbone.View.extend({
	tagName: "div",
	className: "map-view",
	
	initialize: function() {
		desks.bind('reset', this.addAll, this);		 
		desks.fetch();
  	},

  	addAll: function() {
  		$(".map-view").children().remove();
  		
  		desks.each(this.addOne);
 	},

	addOne: function(desk) {
	   var view = new DeskView({model: desk}); 
		
	   $(".map-view").append(view.render().el);
 
   	},
	
	render: function() {
		return this;
	}
});