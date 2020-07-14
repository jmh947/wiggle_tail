const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/wiggletails"
);

const sitterSeed = [
    {
    firstName: "Sandy",
    lastName: "Beach",
    sitterZipCode: 85297,
    email: "sandybeaches@gmail.com",
    phoneNumber: 4805546665,
    wage: 44,
    description: "Enjoy your day away without worry!",
    Boarding: true,
    Stay_at_home: true ,
    Walks: true,
    Daycare: false 


},

{
    firstName: "Robyn",
    lastName: "Banks",
    sitterZipCode: 85296,
    email: "robynbanks@yahoo.com",
    phoneNumber: 4807894534,
    wage: 13,
    description: "Pet loving house with fenced yard ",
    Boarding: false,
    Stay_at_home: false,
    Walks: true,
    Daycare: true

},

{
    firstName: "Frank",
    lastName: "Ballpark",
    sitterZipCode: 97701,
    email: "ballparkfranks@aol.com",
    phoneNumber: 5414365556,
    wage: 30,
    description: "Big or small I love them all",
    Boarding: true,
    Stay_at_home: true,
    Walks: true,
    Daycare: true
},

{
    firstName: "Ben",
    lastName: "Dover",
    sitterZipCode: 85297,
    email: "bendover@yahoo.com",
    phoneNumber: 6024567773,
    wage: 17,
    description: "Dependable and home all day",
    Boarding: false,
    Stay_at_home: true,
    Walks: false,
    Daycare: true
},

{
    firstName: "Anita",
    lastName: "Bath",
    sitterZipCode: 85296,
    email: "anitabath@gmail.com",
    phoneNumber: 6025569990,
    wage: 18,
    description: "Responsible pal for furry friends",
    Boarding: false,
    Stay_at_home: false,
    Walks: false,
    Daycare: false
},

{
    firstName: "Ally",
    lastName: "Gater",
    sitterZipCode: 97701,
    email: "allygater@yahoo.com",
    phoneNumber: 5413436576,
    wage: 14,
    description: "Your pet's vacation starts here",
    Boarding: true,
    Stay_at_home: true,
    Walks: false,
    Daycare: false
},

{
    firstName: "Joe",
    lastName: "King",
    sitterZipCode: 85296,
    email: "joeking@yahoo.com",
    phoneNumber: 6026678889,
    wage: 22,
    description: "I work from home and would love some company",
    Boarding: false,
    Stay_at_home: true,
    Walks: true,
    Daycare: false
},

{
    firstName: "Jack",
    lastName: "Pott",
    sitterZipCode: 85297,
    email: "jackpott@gmail.com",
    phoneNumber: 4806559992,
    wage: 10,
    description: "Full-time animal lover",
    Boarding: false,
    Stay_at_home: true,
    Walks: true,
    Daycare: true
},

{
    firstName: "Will",
    lastName: "Farrell",
    sitterZipCode: 85296,
    email: "comedyking@gmail.com",
    phoneNumber: 4806587782,
    wage: 100,
    description: "I will make your pets laugh",
    Boarding: false,
    Stay_at_home: true,
    Walks: true,
    Daycare: false
},

{
    firstName: "Brittney",
    lastName: "Spears",
    sitterZipCode: 97701,
    email: "itsBrittney@gmail.com",
    phoneNumber: 4806559992,
    wage: 20,
    description: "I promise I won't hit your baby one more time",
    Boarding: false,
    Stay_at_home: false,
    Walks: true,
    Daycare: false
}

]

db.Sitter
  .remove({})
  .then(() => db.Sitter.insertMany(sitterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });