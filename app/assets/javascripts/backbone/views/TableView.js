 Waiter.Tables.TableCollection = new TableCollection;
   
  var TableView = Backbone.View.extend({

   el: $("#table-module"),
  	
	
   initialize: function() {	 
    
    Waiter.Tables.TableCollection.bind('reset', this.renderAll, this);
	
	Waiter.Tables.TableCollection.fetch();
	
   },
   
 
   renderOne: function(table) {	
     var view = new TableItemView({model: table}); 
     $("#table-module").append(view.render().el);
   },


   renderAll: function() {
	 Waiter.Tables.TableCollection.each(this.renderOne);
   }


  });