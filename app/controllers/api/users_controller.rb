class Api::UsersController < ApplicationController

  def get_current_user
    super
    render json: @current_user
  end
end
