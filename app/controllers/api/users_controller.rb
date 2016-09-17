class Api::UsersController < ApiController

  def get_current_user
    super
    render json: @current_user
  end
end
