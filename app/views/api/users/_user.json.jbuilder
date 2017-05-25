json.extract! user, :id, :username, :audiobooks
json.friend_inf do
  json.array!(user.friend_inf) do |f|
    json.username f.username
    json.friendId f.id
  end
end
