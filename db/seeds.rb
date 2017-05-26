# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create({username: "guest", password: "password", email: "guest@guestmail.com"})
# book1 = Audiobook.create({
#   title: "The Path That Leads To Home",
#   author: "Edgar Albert Guest",
#   description: "Guest has been called “the poet of the people.”
#    Most often, his poems were fourteen lines long and presented
#    a deeply sentimental view of everyday life.
#    He considered himself “a newspaper man who wrote verses.”
#    Of his poem he said, “I take simple everyday things that
#    happen to me and I figure it happens to a lot of other people
#     and I make simple rhymes out of them.” ",
#   audio: "https://s3-us-west-1.amazonaws.com/project-dev/w2d3-master.mp3",
#   image_url: "http://res.cloudinary.com/duxhobt9p/image/upload/v1495822737/path_to_home_p0v2i8.jpg",
#   uer_id: 1})
