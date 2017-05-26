class AddColumnImageUrl < ActiveRecord::Migration
  def change
    add_column :audiobooks, :image_url, :string
  end
end
