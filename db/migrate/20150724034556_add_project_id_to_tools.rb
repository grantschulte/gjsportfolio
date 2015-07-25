class AddProjectIdToTools < ActiveRecord::Migration
  def change
    add_column :tools, :project_id, :integer
  end
end
