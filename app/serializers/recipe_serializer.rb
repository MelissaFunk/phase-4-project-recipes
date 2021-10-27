class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :cuisine, :avg_rating
  has_many :reviews

  def avg_rating
    ratings = self.object.reviews.map do |rev|
      rev.rating
    end
    ratings.then{ |r| r.sum.to_f / r.size }
  end

end
