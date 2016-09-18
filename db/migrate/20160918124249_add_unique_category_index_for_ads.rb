class AddUniqueCategoryIndexForAds < ActiveRecord::Migration
  def change
    add_index :ads_categories, [:category_id, :ad_id], :unique => true
  end
end
