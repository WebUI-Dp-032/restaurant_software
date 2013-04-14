class AdminController < ApplicationController
  
  
  before_filter :authenticate_admin!
  def index
    @role =  'admin'
  end

end
