var WaiterModel = Backbone.Model.extend({
    defaults: function() {
      return {
        id: "",
        name : "",
        login : "",
        password : ""
      };
    }
  });