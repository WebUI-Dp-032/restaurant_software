(function (GroupModel) {
  window.RS.Collections.GroupCollection = Backbone.Collection.extend({
    model: GroupModel,
    url: "/groups"
  });
})(
window.RS.Models.GroupModel
);