  var TableItemView = Backbone.View.extend({

    template: JST['backbone/templates/TableItemView'],

    events: {
     "click": "selectTable"
    },

    initialize: function() {
      this.model.on('change', this.render, this);
    },

    render: function() {

	  this.model.set("id", this.model.id);						   
      this.$el.html(this.template(this.model.toJSON()));

	  if (this.model.get("status") === "free") {
	    this.$('div.btn.btn-large.desk').removeClass("btn-inverse");
	  }

	  if (this.model.get("status") === "busy")  {
        this.$('div.btn.btn-large.desk').addClass("btn-inverse");
	  }

      return this;
    },


   selectTable : function(e) { 

     Backbone.Mediator.pub("selectTable", {table_id: this.model.get("id"), 
	                                       status: this.model.get("status")});

	 $('div.btn.btn-large.desk').removeClass("selected");
     this.$('div.btn.btn-large.desk').addClass("selected"); 

	 return false;   
   }

 });
