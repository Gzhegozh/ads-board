class AddDefaultCategoryForAds < ActiveRecord::Migration
  def change
    change_column :ads_categories, :category_id, :integer, default: 1
  end
end
