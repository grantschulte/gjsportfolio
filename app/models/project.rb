class Project < ActiveRecord::Base
  has_and_belongs_to_many :tools

  def project_url
    id = self.id.to_s
    Rails.application.config.app_hostname + 'projects/' + id
  end
end
