class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :favorite
end
