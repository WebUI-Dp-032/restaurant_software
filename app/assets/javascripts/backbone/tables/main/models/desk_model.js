(function () {
  window.RS.Models.DeskModel = Backbone.Model.extend({
    defaults: {
      name: "",
      id:"",
      status:"",
      position_x:  "",
      position_y: ""
    }
  });
})();