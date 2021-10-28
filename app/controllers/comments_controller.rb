class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :comment_not_found_response
    skip_before_action :authorized

        def create
            comment = Comment.create(comment_params)
            render json: comment, status: :created
        end

        def destroy
            deletable_comment = Comment.find(params[:id])
            deletable_comment.destroy
            head :no_content
        end

        private

        def comment_params
            params.permit(:user_id, :recipe_id, :comment)
        end

        def comment_not_found_response
            render json: {error: "Comment not found"}, status: :not_found
        end
end
