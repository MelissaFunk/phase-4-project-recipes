class RecipeReviewCommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :cuisine, :directions, :ingredients, :avg_rating
  has_many :reviews
  has_many :comments

  def avg_rating
    ratings = self.object.reviews.map do |rev|
      rev.rating
    end
    ratings.then{ |r| r.sum.to_f / r.size }
  end
end
