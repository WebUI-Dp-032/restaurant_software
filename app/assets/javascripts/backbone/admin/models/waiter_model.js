var WaiterModel = Backbone.Model.extend({
    defaults: function() {
      return {
        name : "",
        login : "",
        password : ""
      };
    }
  });