class Event < ActiveRecord::Base
  
  geocoded_by :address
  after_validation :geocode

  # Create ActiveRecord methods to facilitate data retrieval:
  has_many :pictures
end
