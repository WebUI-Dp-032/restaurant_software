class ApplicationController < ActionController::Base
 before_filter {authenticate_user! || authenticate_admin!}
  
  protect_from_forgery
  
end
