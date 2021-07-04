// / Object (Basic : 13 ข้อ) /////

////////// Basic////////////
// 1.Build JavaScript Objects 
// var myDog = {
//     name : 'Dodo',
//     legs: 4,
//     tails : 1,
//     friends: ['aa','bb','cc']
//     };



//////Access Property and Value/////////
// 2.Accessing Object Properties with Dot Notation
// var testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
//   };
  
//   var hatValue = testObj.hat;      
//   var shirtValue = testObj.shirt;    



// 3.Accessing Object Properties with Bracket Notation
// var testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
//   };
  
//   var entreeValue = testObj['an entree'];   
//   var drinkValue = testObj['the drink'];    



// 4.Accessing Object Properties with Variables
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };

//   var playerNumber = 16;       
//   var player = testObj[playerNumber]; 


//////////////Update,Add,Delete Property and Value//////////////
// 5.Updating Object Properties
// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
//   myDog['name'] = 'Happy Coder';



// 6.Add New Properties to a JavaScript Object
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
//   myDog.bark = "woof";



// 7.Delete Properties from a JavaScript Object
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
//   };
//   delete myDog.tails;



///////////Intermediate///////////
// 8.Using Objects for Lookups*ใช้เรื่องฟังก์ชันเล็กน้อย
// function phoneticLookup(val) {
//     var result = "";
  
//     var lookup = {
//       "alpha": "Adams",
//       "bravo":"Boston",
//       "charlie":"Chicago",
//       "delta": "Denver",
//       "echo":"Easy",
//       "foxtrot":"Frank"
//     }
  
//     result = lookup[val];
//     return result;
//   }
  
//   phoneticLookup("charlie");



// 9.Testing Objects for Properties *ใช้เรื่องฟังก์ชันเล็กน้อย
// function checkObj(obj, checkProp) {
//     if(obj.hasOwnProperty(checkProp))
//     return obj[checkProp];
//     else  return  "Not Found";
//   }



////////////////Complex Object/////////////
// 10.Manipulating Complex Objects
// var myMusic = [
//     {
//       "artist": "Billy Joel",
//       "title": "Piano Man",
//       "release_year": 1973,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//       "gold": true
//     },
//     {
//       "artist": "Billy Joel",
//       "title": "Piano Man",
//       "release_year": 1973,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//     },
  
//   ];



// 11.Accessing Nested Objects
// var myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };
  
//   var gloveBoxContents = myStorage.car.inside['glove box'];



// 12.Accessing Nested Arrays
// var myPlants = [
//     {
//       type: "flowers",
//       list: [
//         "rose",
//         "tulip",
//         "dandelion"
//       ]
//     },
//     {
//       type: "trees",
//       list: [
//         "fir",
//         "pine",
//         "birch"
//       ]
//     }
//   ];
  
//   var secondTree = myPlants[1].list[1];




///////////////Application///////////
// 13.Record Collection
// var recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
//   function updateRecords(records, id, prop, value) {
//     if(prop !== 'tracks' && value.trim() !== ''){
//       records[id][prop] = value;
//     }
//     else if(prop === 'tracks' && records[id].hasOwnProperty('tracks') === false){
//       records[id][prop] = [value];
//     }
//     else if(prop === 'tracks' && value.trim() !== ''){
//       records[id][prop].push(value);
//     }
//     else if(value.trim() === ''){
//      delete records[id][prop]
//     }
//     return records;
//   }
  
//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');



