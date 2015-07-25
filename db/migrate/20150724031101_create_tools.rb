class CreateTools < ActiveRecord::Migration
  def change
    create_table :tools do |t|
      t.string :name
      t.string :color
      t.string :reference_url
      t.timestamps null: false
    end
  end
end
