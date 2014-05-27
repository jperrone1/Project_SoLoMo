class Post < ActiveRecord::Base
	has_many :comments, :as => :commentable
  # accepts_nested_attributes_for :comments
end
