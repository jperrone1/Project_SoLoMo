# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


posts = Post.create ([
				{ title: "Antmachine", body: "is Algonquin for 'destroyer of toilets'"}
				])

events = Event.create ([
				{ type: "", date:"06/01/2014", time: "08:00:00", duration: "", address: "", latitude: "37.758900", longitude: "-122.490349", cash_only?: "Yes", description: "Incredibly stuff going on sale, get it while it's hot." },
				{ type: "", date:"06/03/2014", time: "10:00:00", duration: "", address: "", latitude: "37.761088", longitude: "-122.450030", cash_only?: "Yes", description: "Once-in-a-lifetime collection of ancient artifacts." },
				{ type: "", date:"05/30/2014", time: "09:30:00", duration: "", address: "", latitude: "37.793414", longitude: "-122.421062", cash_only?: "No", description: "SALE!!!!!! CHECK OUT THESE PICS!" }  
				])
