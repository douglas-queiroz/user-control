# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(:name=> 'Douglas', :email => 'douglas@douglas.com', :sex => 1, :birth_date => '12-05-1989', :password => 'password', :password_confirmation => 'password')