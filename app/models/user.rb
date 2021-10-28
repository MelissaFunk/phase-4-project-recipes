class User < ApplicationRecord
  has_many :reviews
  has_many :comments
  has_many :recipes, through: :reviews

  validates :username, :password, presence: true
end
