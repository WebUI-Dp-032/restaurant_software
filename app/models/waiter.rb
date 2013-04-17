class Waiter < ActiveRecord::Base
  attr_accessible :id, :integer, :login, :name, :password
end
