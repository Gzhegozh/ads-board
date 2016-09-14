class AddStatusToAds < ActiveRecord::Migration
  def change
    add_column :ads, :status, :string, :null => false, :default => 'on_moderation'
  end
end
