class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :cuisine, :all_directions, :all_ingredients, :avg_rating, :all_comments, :favorite
  # has_many :reviews
  # has_many :comments

  def avg_rating
    ratings = self.object.reviews.map do |rev|
      rev.rating
    end
    ratings.then{ |r| r.sum.to_f / r.size }
  end

  def all_directions
    self.object.directions.split("; ")
  end

  def all_ingredients
    self.object.ingredients.split("; ")
  end

  def all_comments
    comments = self.object.comments.map do |com|
      com.comment
    end
    comments
  end

  def favorite
    favorite = self.object.reviews.map do |rev|
      rev.favorite
    end
    favorite
  end

end
