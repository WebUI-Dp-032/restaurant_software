(function (){

  window.RS.Models.OrderModel = Backbone.Model.extend({

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
      var self = this;
      this.url = '/orders/get_order_by_table/' + table_id + '.json';
      this.clear();
      this.fetch({success: function(order, response) {
        self.url = '/orders/' + order.get('id');
        Backbone.Mediator.pub('foods_view_load_foods', order.get('id'));
      } });
    },

    prepareOrder: function(table_id) {
      this.clear();
      this.set({status: 'opened', table_id: table_id});
      this.prepare = true;
    },

    createOrder: function() {
      var self = this;
      this.url = '/orders';
      this.prepare = false;
      this.save({},{success: function(order, response) {
          self.url = '/orders/' + order.get('id');
          self.set({id: order.get('id')});
          Backbone.Mediator.pub('foods_view_save_prepared_food', self.get('id'));
        }
      });
      Backbone.Mediator.pub('tableIsBusy', this.get('table_id'));
    },

    changeTotal: function(options) {
      switch (options.action) {
        case 'add' : this.save({total: this.get('total') + options.value }); break;
        case 'sub' : this.save({total: this.get('total') - options.value }); break;
      }
    }

  });

})();