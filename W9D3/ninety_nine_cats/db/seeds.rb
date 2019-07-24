# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all

d1 = Date.new(1990, 11, 19)
d2 = Date.new(1990, 1, 22)
d3 = Date.new(1969, 9, 7)

cat1 = Cat.create!(birthdate: d1, color: 'brown', name: 'Spunky', sex: 'M', description: 'cool cat')
cat1 = Cat.create!(birthdate: d2, color: 'teal', name: 'Spots', sex: 'F', description: 'fluff ball')
cat1 = Cat.create!(birthdate: d3, color: 'orange', name: 'Dotty', sex: 'F', description: 'old bag')

