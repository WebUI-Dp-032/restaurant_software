(function (){
window.RS.Models.FoodModel = Backbone.Model.extend({

    defaults: {
      order_id: "",
      title: "",
      cost: 0,
      summary: 0,
      number: 1,
      delivered: 0
    },

    incrementFood: function() {
      this.save({number: this.get('number') + 1,
                 summary: this.get('summary') + this.get('cost') });
      Backbone.Mediator.pub("order_model_change_total", {action: "add",
                                                         value: this.get('cost')});
    },

    decrementFood: function() {
      if(this.get('number') !== 1) {
        this.save({number: this.get('number') - 1,
                   summary: this.get('summary') - this.get('cost') });
        Backbone.Mediator.pub("order_model_change_total", {action: "sub",
                                                           value: this.get('cost')});
      }
    },

    toggleStatus: function() {
      var status = (this.get('delivered') === 1) ? 0 : 1;
      this.save({delivered: status});
    }

  });

})();