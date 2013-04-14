class UserController < ApplicationController
  
  
  before_filter :authenticate_user!
  def index
    @role =  'main'
  end

end
