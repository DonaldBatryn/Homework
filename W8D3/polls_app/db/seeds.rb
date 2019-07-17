# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Poll.destroy_all
Question.destroy_all
AnswerChoice.destroy_all
Response.destroy_all

abby = User.create(username: 'Abby')
donnie = User.create(username: 'Donnie')

p1 = Poll.create(title: 'Our Poll_1', user_id: donnie.id)
p2 = Poll.create(title: 'Our Poll_2', user_id: abby.id)

q1 = Question.create(text: 'Q1. What color is the sky?', poll_id: p1.id)
q2 = Question.create(text: 'Q1. What color is the sky?', poll_id: p2.id)
q3 = Question.create(text: 'Q2. Whats the second question?', poll_id: p1.id)
q4 = Question.create(text: 'Q2. Whats the second question?', poll_id: p2.id)

a1 = AnswerChoice.create(choice: "a1. to Q1", question_id: q1.id )
a2 = AnswerChoice.create(choice: "a2. to Q1", question_id: q1.id )
a3 = AnswerChoice.create(choice: "a1. to Q2", question_id: q2.id )
a4 = AnswerChoice.create(choice: "a2. to Q2", question_id: q2.id )

