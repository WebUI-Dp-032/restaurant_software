(function () {

	window.RS.Views.TableView = Backbone.View.extend({
		
		template: JST['backbone/tables/admin/templates/table_template'],
       
        edit_table: JST['backbone/tables/admin/templates/edit_template'],
		
		initialize: function () {	    
		  
		  this.model.on('change', this.render, this);
          this.model.on('destroy', this.remove, this);
		},
   
        events: {
	     "mouseup":  "deleteTable",
		 "click": "SelectedTable"
        },
		
		
  render: function() {

  	this.$el.html(this.template(this.model.toJSON()));
    
		this.$el.css({'position':'absolute',
                  'left'    : this.model.get('position_x'),
                  'top'     : this.model.get('position_y')});

		  $('#edit-table').hide();
   	this.$el.draggable();
   	return this;
  },

     SelectedTable : function(e) {
		 
	   $("#map-view div").children().css({'border':'none'});
	   
	   $('#edit-table').show();

	   $("#table-description").attr("value", this.model.get('description'));
	   

	    var  self = this,
            edit_button = $('#edit-select-btn'),
            square =  $('#selected-square'),
            rectangle =  $('#selected-rectangle'),
            circle = $('#selected-circle'),
            description = $('#table-description'),
            capacity = $('#table-capacity option'),
            form = $('#edit-selected'),
            tables = $('#map-view div');



     	tables.children().removeClass('selected');
        $(e.target).addClass('selected');
        $('#edit-table').show();

     	  
	    description.attr('value', self.model.get('description'));


	    $.each(capacity, function () {
                if(self.model.get('capacity') == $(this).text())
                    $(this).prop("selected", true);

        });


	    form.children().removeClass('active');

	    switch(this.model.get('form')) {
		  case 'square-table':
		    square.addClass('active');
		  break;  
		
		  case 'rectangle-table':
		    rectangle.addClass('active');
		  break; 
		
		  case 'circle-table':
		    circle.addClass('active');
		  break; 
	    }

        edit_button.unbind('click');
	    edit_button.bind('click', this.editTables.bind(this));


	    return false;  
	   
	 },
	 
	 editTables: function(e) {
	   var description = $('#table-description').val(),
	       capacity = $('#table-capacity option:selected').val(),
	       form = $('#edit-selected button.active div').attr('class') + "-table";
     
	    this.model.save({description: description,
	                     capacity: capacity,
					     form: form 
	                    });
	  },
	
	deleteTable: function(e) {

	  var  delete_table = false;
	       pos_x = this.$el.position().left,
           pos_y = this.$el.position().top,
		   // form = $('#hall-form-btn button').attr('id');
form = $('#hall-form-btn button.active').attr('id')

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