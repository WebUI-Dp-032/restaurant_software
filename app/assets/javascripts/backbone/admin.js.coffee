#= require_self
#= require_tree ./admin/templates
#= require_tree ./admin/models
#= require_tree ./admin/collections
#= require_tree ./admin/views

window.RS =
  Models: {}
  Collections: {}
  Views: {}
  start: () -> 
    view = new window.RS.Views.AppView()
    view.render()