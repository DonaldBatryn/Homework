class CreateCats < ActiveRecord::Migration[5.2]

  def change
    create_table :cats do |t|
      t.date :birthdate, null: false
      t.string :color, null: false
      t.string :name, null: false
      t.string :sex, inclusion: { in: %w(M F), message: "Must choose M or F" }, null: false
      t.text :description, null: false
      t.timestamps
    end

    #add_index :cats
  end
end
