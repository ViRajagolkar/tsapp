var products;
products = [];

products.push("lapi");
products.push("Desktop");
products.push("Router");

//Filter by Uppercase criteria
let filteredRecords = products.filter((value: string, index) => 
              value.toUpperCase().charAt(0) === value.charAt(0));

console.log(filteredRecords);