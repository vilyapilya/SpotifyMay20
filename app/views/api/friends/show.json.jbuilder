json.set! "friendship" do
  json.extract! @friendship, :user_id, :friend_id, :users
end
