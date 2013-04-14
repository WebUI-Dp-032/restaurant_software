class MainController < ApplicationController
  
  
  #before_filter :authenticate_user!
  def index
    @role =  'main'
  end

  def admin
    @role = 'admin'
  end


end
