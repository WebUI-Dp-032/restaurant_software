(function () {

  window.RS.Models.TableModel = Backbone.Model.extend({

	defaults: {
    name        : "",
    position_x  : "",
    position_y  :  "",
    description : "",
    capacity    : "",
    form        : "",
    status      : 'free'
	}
});

})();