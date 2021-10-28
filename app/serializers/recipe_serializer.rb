class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :cuisine, :directions, :ingredients, :avg_rating, :all_comments
  # has_many :reviews
  # has_many :comments

  def avg_rating
    ratings = self.object.reviews.map do |rev|
      rev.rating
    end
    ratings.then{ |r| r.sum.to_f / r.size }
  end

  def all_comments
    comments = self.object.comments.map do |com|
      com.comment
    end
    comments
  end

end
