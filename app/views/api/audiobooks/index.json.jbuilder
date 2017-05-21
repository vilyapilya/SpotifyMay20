@books.each do |book|
  json.set! "books" do
    json.set! book.id do
      json.extract! book, :id, :title, :author, :audio_url, :image_url, :description
    end
  end
end
