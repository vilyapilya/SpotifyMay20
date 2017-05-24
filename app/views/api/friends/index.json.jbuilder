@friends.each do |f|
    json.set! f.id do
      json.extract! f, :id, :username
    end
end
