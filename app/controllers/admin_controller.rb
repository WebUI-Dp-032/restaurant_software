class AdminController < ApplicationController
  
  
  before_filter :authenticate_admin!
  def index
    @role =  'admin'

    #  need to preload MenuModule data
    @groups = Group.all
    @categories = Category.all;
    @items = Item.all
  end

end
