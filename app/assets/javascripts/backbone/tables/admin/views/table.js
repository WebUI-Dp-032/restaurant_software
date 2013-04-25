(function () {

	window.RS.Views.TableView = Backbone.View.extend({
		
		template: JST['backbone/tables/admin/templates/table_template'],
       
        edit_table: JST['backbone/tables/admin/templates/edit_template'],
		
		initialize: function () {	    
		  
		  this.model.on('change', this.render, this);
          this.model.on('destroy', this.remove, this);
		
          //console.log(this.edit_table());
		},
   
        events: {
	     "mouseup":  "deleteTable",
		 "click": "SelectedTable",
		 "click #edit-select-btn" : "editTables"
        },
		
		
   render: function() {
	   
     $('#edit-table').hide();
	  
	 $("#map-view div").children().css({'border':'none'});
	   
	 this.$el.html(this.template(this.model.toJSON()));
	   
	 this.$el.css({'position':'absolute',
	               'left': this.model.get('position_x'),
	               'top':this.model.get('position_y')
				 });
				   
     this.model.set('id_table', this.model.id); 
	 
	 this.$el.draggable();

     return this;
	 
    },


     SelectedTable : function(e) {
		 
	   $("#map-view div").children().css({'border':'none'});
	   $(e.target).css({'border':'2px solid #ff0'}); 
	   
	   $('#edit-table').show();

	   $("#table-description").attr("value", this.model.get('description'));
	   
	   /*Доделать редактирование*/
	   
	   //$("#table-capacity option").eq(this.model.get('capacity') - 2).attr('selected', 'selected'); 	   
	 },
	 
	 editTables: function(e) {
	   alert(2);
	  },
	
	deleteTable: function(e) {

	  var  delete_table = false;
	       pos_x = this.$el.position().left,
           pos_y = this.$el.position().top,
		   form = $('#hall-form-btn button').attr('id');
		   
		   
		 switch(form) {
			 
		   case 'square-hall':
		     if (pos_x > 400  || 
			     pos_x < 0 || 
			     pos_y > 400 || 
			     pos_y < 0 ) {
			
			      delete_table = true;		
			 }
			break;
			
		  case 'rectangle-hall':
		     if (pos_x > 600  || 
			     pos_x < 0 || 
			     pos_y > 400 || 
			     pos_y < 0 ) {	
				  
			       delete_table = true;	
			 }
		  break;
		  
		    case 'circle-hall':
					if((Math.sqrt(Math.pow(pos_x - 200, 2) + 
					    Math.pow(pos_y - 200, 2))) >= 200)  {
							
			      delete_table = true;	
			 }
		  break;			
		} 
		
		  if (delete_table) {
		    this.model.destroy();	
		  }
		  
		  else {
		    this.model.save({position_x: pos_x + "px",
			                 position_y: pos_y + "px"});		
		  }
	}

	});

})();