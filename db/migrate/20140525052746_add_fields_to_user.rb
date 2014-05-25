class AddFieldsToUser < ActiveRecord::Migration
  def change
    # These will add the new columns to the User model: 
    add_column :users, :first_name, :string 
    add_column :users, :last_name, :string 
    add_column :users, :street_address, :string
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :zip, :string
    add_column :users, :home_phone, :string
    add_column :users, :mobile_phone, :string
    add_column :users, :latitude, :float
    add_column :users, :longitude, :float
  end
end
