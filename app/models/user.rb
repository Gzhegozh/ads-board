class User < ActiveRecord::Base
  rolify
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
         :trackable, :validatable,
         :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :ads
end
