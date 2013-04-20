#= require_self
#= require ./order/config
#= require ./tables/config
#= require ./menu/config
#= require ./personal/config
#= require ./page/config

#= require_tree ./routers

window.RS =
  Models: {}
  Collections: {}
  Routers: {}
  Views: {}
  Data: {}

  start: () ->
    user = window.RS.user
    role = (if (user.admin) then "admin" else "waiter")
    window.RS.Router.navigate('proxy/' + role, {trigger: true})