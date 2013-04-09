var OrderModel = Backbone.Model.extend({

  defaults: {
    table_id: 0,
    status: 'opened',
    total: 0
  },


  url: '/orders',

  initialize: function() {
    Backbone.Mediator.sub('order_model_change_total', this.changeTotal, this);
  },

  loadOrder: function(table_id) {
    this.url = '/orders/get_order_by_table/' + table_id + '.json';
    this.clear();
    this.fetch({success: this.loadOrderCallback});
  },

  loadOrderCallback: function(order, response) {
    Waiter.Order.TotalView.model.url = '/orders/' + order.get('id');
    // Waiter.Order.FoodsView.collection.loadFoods(order.get('id'));
    Backbone.Mediator.pub('foods_view_load_foods', order.get('id'));
  },

  prepareOrder: function(table_id) {
    this.clear();
    this.set({status: 'opened', table_id: table_id});
    this.prepare = true;
  },

  createOrder: function() {
    this.url = '/orders';
    this.prepare = false;
    this.save({},{success: this.loadCreateCallback});
    Backbone.Mediator.pub('tableIsBusy', this.get('table_id'));
  },

  loadCreateCallback: function(order, response) {
    Waiter.Order.TotalView.model.url = '/orders/' + order.get('id');

    console.log('order-id', order.get('id'), order.id);
    Waiter.Order.TotalView.model.set({id: order.get('id')});
    Backbone.Mediator.pub('foods_view_save_prepared_food');
  },

  changeTotal: function(options) {
    console.log('change total', options);
    switch (options.action) {
      case 'add' : this.save({total: this.get('total') + options.value }); break;
      case 'sub' : this.save({total: this.get('total') - options.value }); break;
    }
  }



});