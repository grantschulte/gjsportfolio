class AddProjectsTools < ActiveRecord::Migration
  def change
    create_table :projects_tools, :id => false do |t|
      t.integer :project_id
      t.integer :tool_id
    end
  end
end
