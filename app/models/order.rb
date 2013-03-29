class Order < ActiveRecord::Base
  attr_accessible :table_id
  has_many :foods
end
