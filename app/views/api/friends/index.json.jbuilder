@friends.each do |f|
  json.set! friends do
    json.set! f.id do
      json.extract! f, :id, :username
    end
  end
end
