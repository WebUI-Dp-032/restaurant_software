(function () {

	window.RS.Views.MapView = Backbone.View.extend({
		
		initialize: function () {
			this.model.save({
				key: "form", 
				value: this.$el.attr("class")
			});

		},

		render: function () {
			return this;
		}

	});
	
})();