class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :school
      t.string :unit
      t.timestamps
    end
  end
end
