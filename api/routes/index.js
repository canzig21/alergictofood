var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/getItem/:item', function (req, res, next) {
  /*
  request(' /item', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
  }
*/
  /*
  // Establishment
  [
      'uuid':'',
      'name':'',
      'category':'',
      'description':''
      'image': '',
      'thumbnail':'',
      'location':'',
      'items':[],
      'attributes': []
  ]
  // Item
  [
      'uuid':'',
      'name':'',
      'category':'',
      'description':''
      'image':'',
      'attributes':[],
      'items':[]
      'history':[]
  ]
  // History
  [
      'stblshmnt_uuid':'',
      'item_uuid':'',
      'timestamp':''
  ]
  */


  var beef = {
    uuid: "1db61c26-8df3-4538-9af6-ccc78d7283bc",
    name: "Ahab's Beef Farm",
    category: "Farm",
    description: "Beef farm with the finest beef",
    image: "",
    attributes: ["meat", "beef"],
    location: "Indian Hill, OH"
  };
  var lettuce = {
    uuid: "efab1a8c-6498-4658-914e-c8f4b9585d73",
    name: "Bessie's Lettuce Farm",
    category: "Farm",
    description: "Lettuce farm with the finest lettuce",
    image: "",
    attributes: ["lettuce", "organic", "vegetarian", "vegan"],
    location: "LaGrange, OH"
  };
  var tomatoes = {
    uuid: "f021f5f0-4054-471d-b393-92a4008064b8",
    name: "Ishmaels's Tomato Farm",
    category: "Farm",
    description: "Tomato farm with the finest Tomatoes",
    image: "",
    attributes: ["tomatoes", "organic", "vegetarian", "vegan"],
    location: "Bowling Green, OH"
  };
  var dairy = {
    uuid: "163477ce-99ea-4d81-aa5c-2e85c80b94fc",
    name: "Nobou's Dairy Farm",
    category: "Farm",
    description: "Dairy farm with the finest Dairy",
    image: "",
    attributes: ["dairy"],
    location: "Athens, OH"
  };
  var cheese = {
    uuid: "062ff1d7-e400-437e-817a-7ff74131cbac",
    name: "Ruggle's Cheese Factory",
    category: "Manufacturer",
    description: "Cheesery",
    image: "",
    attributes: ["dairy"],
    location: "LaGrange, OH"
  };
  var patties = {
    uuid: "305273ec-1029-4479-bf1c-4ae62ed26246",
    name: "Starbuck's Patty Factory",
    category: "Manufacturer",
    description: "Meat grindery",
    image: "",
    attributes: ["beef", "pork", "meat"],
    location: "Mason, OH"
  };
  var distributor = {
    uuid: "3c69f048-8449-4a4a-8a09-1c535e2e1c0f",
    name: "Sandy's Distributor",
    category: "Distributor",
    description: "Food and stuff",
    image: "",
    attributes: ["meat", "dairy", "beef"],
    location: "West Chester, OH"
  };
  var restaurant = {
    uuid: "d58cbd63-1962-493d-873d-3161530be483",
    name: "Bone's Burgers",
    category: "Restaurant",
    description: "Best Burgers!",
    image: "",
    attributes: ["meat", "dairy", "beef"],
    location: "Montgomery, OH"
  };

var item =  {

}


  res.json({
    "uuid": req.params.item,
    "name": "Beef Burger",
    "category": "food",
    "description": "a beef burger",
    "attributes": ["cooked", "beef", "meat", "dairy"],
    "image": "https://www.bellaviva.com/thumbnail.asp?file=assets/images/dried-fruit/almonds-roasted.jpg",
    "ingredients": [],
    "history": [restaurant, distributor]

  })
})

router.get('/getEstablishment', function (req, res, next) {
  res.json({

  })
})

module.exports = router;