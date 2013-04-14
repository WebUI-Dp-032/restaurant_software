class MainController < ApplicationController

  def index
    @role =  'main'
  end

  def admin
    @role = 'admin'
  end


end
