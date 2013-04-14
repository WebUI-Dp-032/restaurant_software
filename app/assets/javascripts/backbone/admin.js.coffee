#= require_self
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

window.RS =
  Models: {}
  Collections: {}
  Views: {}
  start: () -> 
    view = new window.RS.Views.AppView()
    view.render()