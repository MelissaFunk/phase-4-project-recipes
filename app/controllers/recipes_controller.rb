class RecipesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :recipe_not_found_response

  def index
    render json: Recipe.all, status: :ok
  end

  def show
    recipe = Recipe.find(params[:id])
    render json: recipe, serializer: RecipeReviewCommentSerializer, status: :ok
  end

  # def top5
  #   top5 = Recipe.order_by(&:) 
  #   render json: top5, status: :ok
  # end

  private

  def recipe_not_found_response
    render json: { error: "Recipe not found" }, status: :not_found
  end 

end
