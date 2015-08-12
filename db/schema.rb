# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150812020228) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "posts", force: :cascade do |t|
    t.string   "title"
    t.text     "content"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.text     "blurb"
    t.text     "figure"
    t.string   "slug"
    t.boolean  "has_more_content"
  end

  create_table "projects", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "short_description"
    t.string   "toolkit",                            array: true
    t.string   "image_url"
    t.string   "site_url"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.boolean  "featured"
    t.string   "project_url"
    t.string   "snapshot_file_name"
    t.string   "snapshot_content_type"
    t.integer  "snapshot_file_size"
    t.datetime "snapshot_updated_at"
  end

  create_table "projects_tools", id: false, force: :cascade do |t|
    t.integer "project_id"
    t.integer "tool_id"
  end

  create_table "tools", force: :cascade do |t|
    t.string   "name"
    t.string   "color"
    t.string   "reference_url"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "project_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
