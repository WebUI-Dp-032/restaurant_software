class UserController < ApplicationController
  
  
  before_filter :authenticate_user!
  def index
    @role =  'main'
    
    #  need to preload MenuModule data
    @groups = Group.all
    @categories = Category.all;
    @items = Item.all
  end

end
