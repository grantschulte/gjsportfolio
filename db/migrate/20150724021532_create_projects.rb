class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.string :short_description
      t.string :toolkit, array: true
      t.string :image_url
      t.string :site_url
      t.timestamps null: false
    end
  end
end
