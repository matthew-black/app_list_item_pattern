// JSON means JavaScript Object Notation
let myBikes = [
  {
    id: 1,
    manufacturer: 'Surly',
    model: 'Steamroller',
    year: 2022,
    color: 'Banana Candy Yellow'
  },
  {
    id: 2,
    manufacturer: 'Gitane',
    model: 'Tour de France',
    year: 1972,
    color: 'French Racing Blue'
  },
  {
    id: 3,
    manufacturer: 'Specialized',
    model: 'Stumpjumper',
    year: 1993,
    color: 'Avocado Green'
  }
]

// Show me myBikes:
console.log('myBikes is:', myBikes)

// Check the datatype of myBikes:
console.log('type of myBikes is:', typeof myBikes)

// Use JSON.stringify to convert myBikes to JSON:
let stringifiedMyBikes = JSON.stringify(myBikes)

// Show me stringifiedMyBikes:
console.log('stringifiedMyBikes is:', stringifiedMyBikes)

// Check the datatype of stringifiedMyBikes:
console.log('type of stringifiedMyBikes is:', typeof stringifiedMyBikes)


