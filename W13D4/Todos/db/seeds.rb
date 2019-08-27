# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all

Todo.create!(title: "Todo 1", body: "body 1")
Todo.create!(title: "Todo 2", body: "body 2")
Todo.create!(title: "Todo 3", body: "body 3")
Todo.create!(title: "Todo 4", body: "body 4")
Todo.create!(title: "Todo 5", body: "body 5")