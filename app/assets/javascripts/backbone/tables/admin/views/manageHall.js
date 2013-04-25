(function(MapView, MapModel, TableView, TableCollection) {

	window.RS.Views.ManageHallView = Backbone.View.extend({
		

		initialize: function () {
			var self = this;

			this.model = new MapModel({id: 1});
				this.model.fetch({
					success: function (data) {
						self.render(data);
					}
			});

			this.collection = new TableCollection();
			this.collection.on('add', this.renderOne, this);
			this.collection.on('reset', this.renderAll, this);

		},

		template: JST['backbone/tables/admin/templates/manageHall_template'],
		
		render: function(data) {
			this.$el.html(this.template());
			$("#map-view").append(
				$("<div></div").addClass(data.get("value"))
			);

			$('#hall-form-btn button' + '#' + data.get("value")).addClass("active");

			this.collection.fetch();
		},

		events: {
			"click #hall-form-btn button": "renderHall",
			"click #table-form-btn button": "selectTableForm",
			"click #map-view > div": "addTable",
		},


		renderHall: function (e) {
			this.model = new MapModel({id: 1});

			var mapView = new MapView({	
				model: this.model,
		    className: $(e.currentTarget).attr("id")
			});

			$("#map-view").children().remove();
			$("#map-view").append(mapView.render().el);
			this.collection.fetch();

		},

		tableForm: "circle-table",
		
		selectTableForm: function (e) {
			
			this.tableForm = $(e.currentTarget).attr("id");

		},
		
		 
		addTableName: function() {
			var names = [],
					maxValue = 1;
			
			if (this.collection.length) {
				this.collection.each(
					function(item) {
						names.push(item.get("name"));
			  });
			    	  
			  maxValue =  Math.max.apply(Math, names) + 1; 
			}
			
		  return maxValue;
		},
		
	
		addTable: function (e) {
			var pos_x,
					pos_y;

		  if ($(e.target).is('#map-view > div')) {
		  	pos_x =  $('#map-view div').position().left;
		  	pos_y  =  $('#map-view div').position().top;
	   
		    this.collection.create({
		    	name: this.addTableName(),
		    	description: "no description...",
		    	position_x: e.pageX - pos_x + "px", 
		    	position_y: e.pageY - pos_y + "px",
		    	capacity: 4,
		    	form: this.tableForm
		    }); 

		  }
			
		  return false; 
	    
		 },

	  renderOne: function(model) {
	  	var view = new TableView({model: model});

	   	$('#map-view > div').append(view.render().el);

	  },
		
		renderAll: function() {

			this.collection.each(this.renderOne);

	  }

	});

})(
window.RS.Views.MapView, 
window.RS.Models.MapModel,
window.RS.Views.TableView,
window.RS.Collections.TableCollection
);