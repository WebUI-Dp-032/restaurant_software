class Item < ActiveRecord::Base
  attr_accessible :attachment, :name, :price, :description, :category_id, :image_url
  belongs_to :category
end
