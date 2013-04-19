var WaitersCollection = Backbone.Collection.extend({
    
    model: WaiterModel,

     url:'/waiters',

    localStorage: new Store("todos-backbone")
});