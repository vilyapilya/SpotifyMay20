class Friend < ActiveRecord::Base
  validates :user_id, :friend_id, presence: true

  belongs_to: :user_id
  
end
