class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :cuisine, :directions, :ingredients
end
