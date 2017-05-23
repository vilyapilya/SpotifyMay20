class Audiobook < ActiveRecord::Base
  validates :title, :author, presence: true
  has_attached_file :audio
  validates_attachment_content_type :audio,  content_type: /\Aaudio\/.*\Z/

  
end
