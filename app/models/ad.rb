class Ad < ActiveRecord::Base
  belongs_to :user
  has_and_belongs_to_many :category, :join_table => :ads_categories
  resourcify
  accepts_nested_attributes_for :category

  validates :category, presence: true
  validates :title, :body, :price, presence: true
end
