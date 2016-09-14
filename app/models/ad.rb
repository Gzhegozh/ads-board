class Ad < ActiveRecord::Base
  belongs_to :user
  has_and_belongs_to_many :category, :join_table => :ads_categories
  resourcify
end
