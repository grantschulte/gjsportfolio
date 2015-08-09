class Project < ActiveRecord::Base
  has_and_belongs_to_many :tools

  # has_attached_file :snapshot

  # Validate the attached image is image/jpg, image/png, etc
  # validates_attachment_content_type :snapshot, :content_type => /\Aimage\/.*\Z/

  def project_url
    id = self.id.to_s
    Rails.application.config.app_hostname + 'projects/' + id
  end
end
