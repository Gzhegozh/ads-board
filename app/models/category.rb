class Category < ActiveRecord::Base
  has_and_belongs_to_many :ads, :join_table => :ads_categories
  resourcify
end
