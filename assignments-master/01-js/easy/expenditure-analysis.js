/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if (!transactions.length) {
    return [];
  }

  let dummyObject = {};
  let resultArr = [];

  for (let i = 0; i < transactions.length; i++) {
    if (!dummyObject[transactions[i].category]) {
      dummyObject[transactions[i].category] = 0;
    }
    dummyObject[transactions[i].category] += transactions[i].price;
  }
  for (let key in dummyObject) {
 resultArr.push({category: key, totalSpent: dummyObject[key] });
  }
  return resultArr
}


module.exports = calculateTotalSpentByCategory;
