# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all
User.destroy_all

User.create(username: "Donnie", password: '123456')

Bench.create(description: "test1", lat: 37.745323, lng: -122.447411)
Bench.create(description: "test2", lat: 37.743128, lng: -122.467241)
Bench.create(description: "test3", lat: 37.796581, lng: -122.438819)
Bench.create(description: "test4", lat: 37.795584, lng: -122.413558)
Bench.create(description: "test5", lat: 37.722575, lng: -122.425284)
Bench.create(description: "test6", lat: 37.792371, lng: -122.430968)
Bench.create(description: "test7", lat: 37.769986, lng: -122.484584)
Bench.create(description: "test8", lat: 37.798647, lng: -122.402500)
Bench.create(description: "test9", lat: 37.715245, lng: -122.414411)
Bench.create(description: "test10", lat: 37.778551, lng: -122.464702)