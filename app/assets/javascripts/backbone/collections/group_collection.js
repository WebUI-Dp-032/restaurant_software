(function (GroupModel) {
  window.RS.Collections.GroupCollection = Backbone.Collection.extend({
    model: GroupModel
  });
})(
window.RS.Models.GroupModel
);