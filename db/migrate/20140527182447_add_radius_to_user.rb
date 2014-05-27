class AddRadiusToUser < ActiveRecord::Migration
  def change 
    add_column :users, :search_radius, :float
  end
end
