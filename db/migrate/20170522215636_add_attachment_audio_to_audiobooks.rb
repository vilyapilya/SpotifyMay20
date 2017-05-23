class AddAttachmentAudioToAudiobooks < ActiveRecord::Migration
  def self.up
    change_table :audiobooks do |t|
      t.attachment :audio
    end
  end

  def self.down
    remove_attachment :audiobooks, :audio
  end
end
