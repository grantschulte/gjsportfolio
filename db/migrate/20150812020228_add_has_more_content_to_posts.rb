class AddHasMoreContentToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :has_more_content, :boolean
  end
end
