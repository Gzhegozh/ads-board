class AdCategory < ActiveRecord::Migration
  def change
    create_table :ads_categories, :id => false do |t|
      t.integer :ad_id
      t.integer :category_id
    end
  end
end
