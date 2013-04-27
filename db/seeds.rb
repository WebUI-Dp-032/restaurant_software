# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
    Table.delete_all
    # Table.create(name: 1, status: "free", position_x: 100, position_y:100)
    # Table.create(name: 2, status: "free", position_x: 100, position_y:200)
    # Table.create(name: 3, status: "free", position_x: 300, position_y:300)
    # Table.create(name: 4, status: "free", position_x: 200, position_y:100)
    # Table.create(name: 5, status: "free", position_x: 300, position_y:100)
    # Table.create(name: 6, status: "free", position_x: 500, position_y:250)
    # Table.create(name: 7, status: "free", position_x: 500, position_y:150)
    # Table.create(name: 8, status: "free", position_x: 400, position_y:150)


#   fish for MenuModule
    Group.delete_all
	Group.create([
		{name: "foods"},
        {name: "drinks"},
        {name: "desserts"},
        {name: "karaoke"}
	])

    Category.delete_all
    Category.create([
            {name: "hot-meals", attachment: "foods"},
            {name: "snacks", attachment: "foods"},
            {name: "pizza", attachment: "foods"},
            {name: "tea", attachment: "drinks"},
            {name: "coffee", attachment: "drinks"},
            {name: "beer", attachment: "drinks"},
            {name: "vodka", attachment: "drinks"},
            {name: "icecream", attachment: "desserts"},
            {name: "cakes", attachment: "desserts"},
            {name: "jelly", attachment: "desserts"}
        ])
    Item.delete_all
    Item.create([
            {id: 1, name: "soup", attachment: "hot-meals", description: "soup description", price: "10"},
            {name: "borsch", attachment: "hot-meals", description: "borsch description", price: "15"},
            {name: "sandwiches", attachment: "snacks", description: "sandwich description", price: "20"},
            {name: "margarita", attachment: "pizza", description: "margarita description", price: "23"},
            {name: "chicago-style", attachment: "pizza", description: "chicago-style description", price: "11"},
            {name: "hawaiian", attachment: "pizza", description: "hawaiian description", price: "12"},
            {name: "black", attachment: "tea", description: "black tea description", price: "14"},
            {name: "green", attachment: "tea", description: "green tea description", price: "17"},
            {name: "latte", attachment: "coffee", description: "latte description", price: "21"},
            {name: "hoegaarden", attachment: "beer", description: "hoegaarden description", price: "20"},
            {name: "absolut", attachment: "vodka", description: "absolut description", price: "152"},
            {name: "strawberry", attachment: "icecream", description: "strawberry description", price: "14"},
            {name: "napoleon", attachment: "cakes", description: "napoleon description", price: "40"},
            {name: "yellow", attachment: "jelly", description: "yellow jelly description", price: "10"},
            {name: "red", attachment: "jelly", description: "red jelly description", price: "10"}
        ])

    User.delete_all
    User.create(name: 'Oleg', email: 'waiter@rsoft.com', username:'waiter', password: 'waiter', password_confirmation: 'waiter', admin: false)
    User.create(name: 'Vitaliy', email: 'admin@rsoft.com', username:'admin', password: 'admin', password_confirmation: 'admin', admin:true)

    Option.delete_all
    Option.create(key: 'form', value: 'circle-hall')