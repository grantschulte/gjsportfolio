class AddsImageHtmlFieldToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :figure, :text
  end
end
