(function () {
  window.RS.Models.TableItemModel = Backbone.Model.extend({
    defaults: {
      name: "",
      id:"",
      status:""  // free|busy
    }
  });
})();