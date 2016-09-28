class Api::UsersController < ApiController
  
  def get_current_user
    render json: current_user
  end
end
