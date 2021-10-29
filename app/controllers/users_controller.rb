class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_response
  skip_before_action :authorized

  def create
    user = User.create!(user_params)
    render json: user, status: :created
    session[:user_id] = user.id
  end

  def favorites
    favorite = Review.where(["user_id = ? and favorite = ?", params[:id], true])
    render json: favorite, status: :ok
  end

  private
  
  def user_params
    params.permit(:username, :password)
  end

  def render_unprocessable_response(invalid)
    render json: {error: invalid.record.errors}, status: :unprocessable_entity
  end
end
