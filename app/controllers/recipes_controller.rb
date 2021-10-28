class RecipesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :recipe_not_found_response
  skip_before_action :authorized

  def top5
    top5reviews = Review.order('rating DESC').first(5).each do |r|
      Recipe.find_by_id(r.recipe_id)
    end
    top5 = top5reviews.map do |rev|
      rev.recipe
    end
    render json: top5, status: :ok
  end

  def index
    render json: Recipe.all, status: :ok
  end

  def show
    recipe = Recipe.find(params[:id])
    render json: recipe, status: :ok
  end

  private

  def recipe_not_found_response
    render json: { error: "Recipe not found" }, status: :not_found
  end 

end
