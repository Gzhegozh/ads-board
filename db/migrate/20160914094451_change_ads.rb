class ChangeAds < ActiveRecord::Migration
  change_table :ads do |t|
    t.change :price, :string, :null => false
    t.change :title, :string, :null => false
    t.change :body, :string, :null => false
  end
end
