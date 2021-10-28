class UsersController < ApplicationController
  # wrap_parameters format:[]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_response
  skip_before_action :authorized, only: [:create]

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def show
    current_user = User.find(session[:user_id])
    render json: current_user, status: :ok
  end

  private
  
  def user_params
    params.permit(:username, :password)
  end

  def render_unprocessable_response(invalid)
    render json: {error: invalid.record.errors}, status: :unprocessable_entity
  end
end
