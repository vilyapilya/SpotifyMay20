@books.each do |book|
  json.set! "books" do
    json.set! book.id do
      json.extract! book, :id, :title, :author, :audio, :image_url, :description, :user_id
    end
  end
end
