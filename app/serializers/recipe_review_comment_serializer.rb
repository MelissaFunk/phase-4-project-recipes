class RecipeReviewCommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :cuisine, :directions, :ingredients
  has_many :reviews
  has_many :comments
end
