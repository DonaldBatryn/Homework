class RemoveSubIdFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :sub_id
    remove_index :posts, :url
  end
end
