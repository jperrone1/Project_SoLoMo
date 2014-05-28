class DropFieldsFromEvents < ActiveRecord::Migration
  def change
    change_table :events do |t|
      t.remove :picture_id, :images, :search_radius
    end
  end
end
