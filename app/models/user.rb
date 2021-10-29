class User < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :recipes, through: :reviews

  has_secure_password

  validates :username, :password, presence: true
end
