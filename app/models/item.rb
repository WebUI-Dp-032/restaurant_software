class Item < ActiveRecord::Base
  attr_accessible :attachment, :name, :price, :description, :category_id
  belongs_to :category
end
