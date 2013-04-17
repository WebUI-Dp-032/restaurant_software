class ApplicationController < ActionController::Base
  # before_filter {authenticate_user! || authenticate_admin!}
  before_filter :authenticate_user!
  protect_from_forgery
end
