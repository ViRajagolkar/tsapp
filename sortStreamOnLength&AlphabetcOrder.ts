var products;
products = new Array();

products.push("lapi");
products.push("Desktop");
products.push("router");
products.push("Printer");

//Sort by Length
var SortByProductsLength= products.sort((a,b) => a.length-b.length);
console.log("Sort by length : ");
for(let p of SortByProductsLength){
        console.log(p);
}
console.log();


//Sort by Alphabets
var SortByProductsAlphabets= products.sort((a:string,b:string) => 
                    a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Sort by alphabets : ");
for(let l of SortByProductsAlphabets){
        console.log(l);
}