json.extract! @book, :id, :title, :author, :image_url, :description, :audio, :user
json.audioFile_url asset_path(@book.audio.url)
