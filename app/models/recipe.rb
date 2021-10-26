class Recipe < ApplicationRecord
  has_many :reviews
  has_many :comments
  has_many :users, through: :reviews

  validates :title, :image, :cuisine, :directions, :ingredients, presence: true 
end
