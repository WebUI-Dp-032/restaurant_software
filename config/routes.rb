RestaurantSoftware::Application.routes.draw do
  devise_for :users, :path_names => {sign_in: 'login', sign_out: 'logout', sign_up: 'reg'}

  get 'orders/get_order_by_table/:table_id' => 'orders#get_order_by_table'
  get 'foods/get_foods_by_order/:order_id' => 'foods#get_foods_by_order'
  resources :orders
  resources :items
  resources :categories
  resources :groups
  resources :foods
  resources :tables
  resources :users

  post 'users/create' => 'users#create_user'

  get 'admin' => 'users#start'
  get 'waiter' => 'users#start'
  root :to => 'users#start'

end