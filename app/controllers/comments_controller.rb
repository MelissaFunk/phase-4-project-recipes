class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :comment_not_found_response
        def create
            comments = Comment.create(comments_params)
            render json:comments.recipes, status: :created
            end
        end

        def destroy
                deletable_comment = Comment.find(params[:id])
                deletable_comment.destroy
                head :no_content
        end

        private

        def comment_params
            params.permit(:id, :user_id, :recipe_id, :comment)
        end

        def comment_not_found_response
            render json: {error: "Comment not found"}, status: :not_found
        end
end
