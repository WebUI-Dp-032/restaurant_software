var TotalView = Backbone.View.extend({

  id:'manage-block',
  className: 'hide',

  template: JST['backbone/templates/order_template'],

  events: {
    "click #cancel_order" : "cancelOrder",
    "click #close_order" : "closeOrder"
  },

  initialize: function() {

    this.model = new OrderModel();
    this.model.on('change', this.render, this);

    Backbone.Mediator.sub('selectTable', this.prepareLoadOrder, this);
    Backbone.Mediator.sub('addFoodInOrder', this.addFood, this);

  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  prepareLoadOrder: function(table) {
    switch (table.status) {
      case 'free' :
        // this.model.off('change');
        this.model.prepareOrder(table.table_id);
        this.$el.hide();
        break;

      case 'busy' :
        this.model.loadOrder(table.table_id);
        this.$el.removeClass('hide');
        this.$el.show();
        break;
    }
  },

  addFood: function(food) {
    if(this.model.prepare) {
      // this.model.on('change', this.render, this);
      this.model.createOrder();
      Waiter.Order.FoodsView.food = food;
      this.$el.show();
    } else {
      Backbone.Mediator.pub('foods_view_save_food', food);
    }
  },


  cancelOrder: function() {
    this.model.save({status: 'cancelled'});
    Backbone.Mediator.pub('tableIsFree', this.model.get('table_id'));
    Backbone.Mediator.pub('foods_view_clear_view');
    this.$el.hide();
  },

  closeOrder: function() {
    this.model.save({status: 'closed'});
    Backbone.Mediator.pub('tableIsFree', this.model.get('table_id'));
    Backbone.Mediator.pub('foods_view_clear_view');
    this.$el.hide();
  }

});