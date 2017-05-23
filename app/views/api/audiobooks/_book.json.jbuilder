json.extract! @book, :id, :title, :author, :image_url, :audio_url, :description
json.audioFile_url asset_path(@book.audio.url)
