class RemoveAudioUrlFromAudiobooks < ActiveRecord::Migration
  def change
    remove_column :audiobooks, :audio_url, :string
  end
end
