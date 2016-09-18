class User < ActiveRecord::Base
  rolify
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
         :trackable, :validatable,
         :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :ads

  validates :email, presence: true, length: { minimum: 2 }, uniqueness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i


end
