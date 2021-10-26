class User < ApplicationRecord
  has_many :reviews
  has_many :comments
  has_many :recipes, through: :reviews

  validates :name, :username, presence: true
end
