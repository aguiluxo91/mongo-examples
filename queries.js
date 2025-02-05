//Employees


//1. List all the employees. 

db.employees.find()

//2. Find the employee with whose name is Steve.

db.employees.find({name: "Steve"}).pretty()

//3. Find all employees whose age is greater than 30.

db.employees.find({age: {$gt: 30}}).pretty()

//4. Find the employee whose extension is 2143.

db.employees.find({"phone.ext": "2143"}).pretty()

//5. Find all employees that are over 30.

db.employees.find({age: {$gte: 30}}).pretty()

//6. Find all employees that are less than or equal to 30.

db.employees.find({age: {$lt: 30}}).pretty()

//7. Find all the employees whose favorite food is pizza.

db.employees.find({"favorites.food": "pizza"}).pretty()

//8. Change Willy’s personal phone number to "93-123-45-67".

db.employees.updateOne({name: "Willy"}, { $set { "phone.personal": "93-123-45-67" }})

//9. Change Bob’s privilege to normal user.

db.employees.updateOne({name: "Bob"}, { $set: { privileges: "user" }})

//10. Find all employees whose favorite artist is equal to Picasso.

db.employees.find({"favorites.artist": "Picasso"}).pretty()

//11. Delete the user John.

db.employees.deleteOne({name: "John"})




//Restaurants


//1. List all the restaurants.

db.restaurants.find().pretty()

//2. Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.

db.restaurants.find({}, {_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()

//3. Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.

db.restaurants.find({}, {_id: 1, name: 1, borough: 1, "address.zipcode": 1}).pretty()

//4. Find the restaurants which are in the borough Bronx.

db.restaurants.find({borough: "Bronx"}).pretty()

//5. Find the restaurants which are in the borough Brooklyn with Steak cuisine

db.restaurants.find({borough: "Bronx", cuisine: "Steak"}).pretty()

//6. Find the restaurants which have achieved a score bigger than 90.

db.restaurants.find({"grades.score": { $gt: 90 } } ).pretty()

//7. Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.

db.restaurants.find({"grades.score": { $gte: 70 }, cuisine: { $ne: "Bakery"}}).pretty()

//8. Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.

db.restaurants.find({"grades.grade": "A", cuisine: { $ne: "Chinese"}, borough: { $ne: "Manhattan"}}).pretty()

//9. Update restaurants with 'American ' cuisine to 'American' (without the space!!!)

db.restaurants.updateMany({cuisine: "American "}, { $set: { cuisine: "American"} } )

//10. Update Morris Park Bake Shop address street to Calle falsa 123.

db.restaurants.updateOne( { name: "Morris Park Bake Shop" }, { $set: { "address.street": "Calle falsa 123" } } )

//11. Delete all the restaurants with address zipcode 10466.
db.restaurants.deleteMany( { "address.zipcode": "10466" } )


//Companies

//1. Find all the companies that include 'Facebook' on the name field.

db.companies.find( { name: "Facebook" } ).pretty()

//2. Let's do it one more together:  ???

//3. Find all the companies which category_code is 'web'. Retrive only their name field.

db.companies.find( { category_code: "web" }, { name: 1, _id: 0 } ).pretty()

//4. Find all the companies named "Twitter", and retrieve only their name, category_code and founded_year fields.

db.companies.find( { name: "Twitter" }, { name: 1, category_code: 1, founded_year: 1, _id: 0 } ).pretty()

//5. Find all the companies who have web as their category_code, but limit the search to 50 companies.

b.companies.find( { category_code: "web" }, { name: 1, _id: 0 } ).limit(50).pretty()

//6. Find all the companies which category_code is 'enterprise' and have been founded in 2005. Retrieve only the name, category_code and founded_year fields.

db.companies.find( { category_code: "enterprise", founded_year: 2005 }, { name: 1, category_code: 1, founded_year: 1, _id: 0 } ).pretty()

//7. Find all the companies that have been founded on the 2000 or have 20 employees. Sort them descendingly by their number_of_employees.

db.companies.find( { $or: [ { founded_year: 2000 }, { number_of_employees: 20 } ] } ).sort( { number_of_employees: -1 } ).pretty()

//8. Find all the companies that do not include web nor social on their category_code. Limit the search to 20 documents and retrieve only their name and category_code.

db.companies.find( { $nor: [ { category_code: "web" }, { category_code: "social" } ] }, { name: 1, category_code: 1, _id: 0 } ).limit(20).pretty()

//9. Find all the companies that were not founded on 'June'. Skip the first 50 results and retrieve only the founded_month and name fields.

db.companies.find( { founded_month: { $ne: 6 } }, { name: 1, founded_month: 1, _id: 0 } ).skip(50).pretty()

//10. Find all the companies that have 50 employees, but do not correspond to the 'web' category_code.

db.companies.find( { number_of_employees: 50, category_code: { $ne: "web" } } ).pretty()

//11. Find all the companies that have been founded on the 1st of the month, but does not have either 50 employees nor 'web' as their category_code. Retrieve only the founded_day and name and limit the search to 5 documents.

db.companies.find( { founded_day: 1, $nor: [  { category_code: "web" }, { number_of_employees: 50 } ] }, { founded_day: 1, name: 1, _id: 0 } ).limit(5).pretty()

//12. Find all the companies which the price_amount of the acquisition was 40.000.000. Sort them by name.

db.companies.find( { "acquisition.price_amount": 40000000 } ).sort( { "name": 1 } ).pretty()

//13. Find all the companies that have been acquired on January of 2014. Retrieve only the acquisition and name fields.

db.companies.find( { "acquisition.acquired_year": 2014, "acquisition.acquired_month": 1 }, { "acquisition.acquired_year": 1, "acquisition.acquired_month": 1, name: 1, _id: 0 } ).pretty()