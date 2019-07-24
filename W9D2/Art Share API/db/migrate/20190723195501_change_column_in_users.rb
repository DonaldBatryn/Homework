class ChangeColumnInUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :username, false
  #   change_table :users do |t|
  #     t.change :username, 
  #     t.column :username, :string, null: false
  #   end
  end

    

  # def down
  #   change_table :users do |t|
  #     t.change :username, null: false
  #   end
  # end
end
