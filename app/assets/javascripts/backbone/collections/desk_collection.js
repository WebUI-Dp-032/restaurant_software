(function () {
  window.RS.Collections.DeskCollection = Backbone.Collection.extend({
    url:'/tables',
    model: DeskModel
  });
})();
