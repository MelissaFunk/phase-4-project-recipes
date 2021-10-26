class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_response
  
  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  private
  
  def user_params
    params.permit(:name, :username)
  end

  def render_unprocessable_response(invalid)
    render json: {error: invalid.record.errors}, status: :unprocessable_entity
  end
end
