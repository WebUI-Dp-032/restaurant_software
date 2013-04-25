(function () {
	
	window.RS.Models.MapModel = Backbone.Model.extend({			
		url: "/options/1.json",
		
		defaults: {
			key: "form",
			value: ""
		}

	});

})();
