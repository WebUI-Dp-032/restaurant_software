class Category < ActiveRecord::Base
  attr_accessible :attachment, :name
  has_many :items
  belongs_to :group
end
