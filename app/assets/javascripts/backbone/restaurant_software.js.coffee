#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./collections
#= require ./views/item_view
#= require ./views/desk_view
#= require ./views/map_view
#= require ./views/main_map_view
#= require ./views/category_view
#= require ./views/group_view
#= require ./views/popup_view
#= require ./views/menu_view
#= require ./views/table_item_view
#= require ./views/tables_view
#= require ./views/order_item_view
#= require ./views/foods_view
#= require ./views/total_view
#= require ./views/app_view

#= require_tree ./admin/templates
#= require_tree ./admin/models
#= require_tree ./admin/collections
#= require ./admin/views/waiter_view
#= require ./admin/views/waiters_view
#= require ./admin/views/personal_view
#= require ./admin/views/hall_view
#= require ./admin/views/menu_view
#= require ./admin/views/tab_view
#= require ./admin/views/app_view

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
    window.RS.Router.route(role, role)
    window.RS.Router.navigate(role, {trigger: true})