class Post < ActiveRecord::Base

  has_attached_file :snapshot

  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :snapshot, :content_type => /\Aimage\/.*\Z/
end
