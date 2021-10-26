class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :cuisine
  has_many :reviews
end
