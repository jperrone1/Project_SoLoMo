class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|

   	t.text     "type"
    t.integer  "user_id"
    t.integer  "picture_id"
    t.date     "date"
    t.time     "time"
    t.float    "duration"
    t.string   "address"
    t.float    "latitude"
    t.float    "longitude"
    t.boolean  "cash_only?"
    t.text     "images"
    t.text     "description"
    t.float    "search_radius"
    t.datetime "created_at"
    t.datetime "updated_at"

    t.timestamps
    end
  end
end
