class Food < ActiveRecord::Base
  attr_accessible :cost, :delivered, :number, :order_id, :summary, :title
  belongs_to :order
end
