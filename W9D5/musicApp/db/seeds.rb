# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

Band.destroy_all

User.create!(email: 'donnie@mail.com', password: 'password')

Band.create!(name: "mtvghosts")
Band.create!(name: "They Might Be Giants")
Band.create!(name: "Arthur Russell")
Band.create!(name: "Ariel Pink")
Band.create!(name: "John Maus")