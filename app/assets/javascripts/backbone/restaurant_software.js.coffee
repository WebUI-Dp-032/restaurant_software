#= require_self
#= require_tree ./templates
#= require ./views/AppView
#= require ./models/OrderModel
#= require ./models/OrderItemModel
#= require ./models/OrderCollection
#= require ./models/TableItemModel
#= require ./models/TableCollection
#= require ./models/Desk
#= require ./models/DeskCollection
#= require ./views/TableItemView
#= require ./views/TablesView
#= require ./views/MapView
#= require ./views/DeskView
#= require ./views/MenuView
#= require ./views/OrderItemView
#= require ./views/OrderView

#= require_tree ./routers

window.RestaurantSoftware =
  Models: {}
  Collections: {}
  Routers: {}
  Views: {}