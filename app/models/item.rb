class Item < ActiveRecord::Base
  attr_accessible :attachment, :name, :price, :description
  belongs_to :category
end
