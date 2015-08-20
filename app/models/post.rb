class Post < ActiveRecord::Base

  def to_param
    slug
  end

  # def slug
  #   self.title.downcase.gsub(' ','-')
  # end
end
