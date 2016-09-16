class Category < ActiveRecord::Base
  has_and_belongs_to_many :ads, :join_table => :ads_categories
  resourcify
  accepts_nested_attributes_for :ads

  validates :name, presence: true
end
