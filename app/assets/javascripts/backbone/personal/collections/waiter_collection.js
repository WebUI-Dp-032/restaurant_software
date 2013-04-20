(function (WaiterModel) {

  window.RS.Collections.WaitersCollection = Backbone.Collection.extend({
    
    model: WaiterModel,
    url:'/users',

    create: function(model) {
      this.add(model);
      $.post('/users/create', 
        {user: {
          email                 : model.get('email'), 
          username              : model.get('username'), 
          password              : model.get('password'), 
          password_confirmation : model.get('password'), 
          name                  : model.get('name')
        }});
    }
  });

})(window.RS.Models.WaiterModel);
  
