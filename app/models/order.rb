class Order < ActiveRecord::Base
  attr_accessible :table_id, :status, :total
  has_many :foods
end
