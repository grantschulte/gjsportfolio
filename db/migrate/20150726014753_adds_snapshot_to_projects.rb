class AddsSnapshotToProjects < ActiveRecord::Migration
  def self.up
    add_attachment :projects, :snapshot
  end

  def self.down
    remove_attachment :projects, :snapshot
  end
end
