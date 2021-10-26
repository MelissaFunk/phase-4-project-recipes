class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :review_not_found_response
        
        def create
            reviews = Review.create(review_params)
            render json: reviews, status: :created
        end

        def update
            found_review = Review.find(params[:id])
            found_review.update(review_params)
            render json: found_review, status: :ok
        end

        def destroy
            deletable_review = Review.find(params[:id])
            deletable_review.destroy
            head :no_content
        end

        private

        def review_params
            params.permit(:user_id, :recipe_id, :rating, :favorite)
        end

        def review_not_found_response
            render json: {error: "Review not found"}, status: :not_found
        end
end
