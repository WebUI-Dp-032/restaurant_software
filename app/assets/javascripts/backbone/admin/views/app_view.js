(function (){

  window.RS.Views.AppView = Backbone.View.extend({
    el: $("#container"),

    template: JST['backbone/admin/templates/page_template'],

    initialize: function() {
      
    },

    render: function() {
      $('#container').html(this.template());
    }

  });

})();