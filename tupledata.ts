let productDir = [{prodId:101, manufacturer:"Sony", prodctName:"sony 8377", basePrice:30000},
                    {prodId:102, manufacturer:"Acer", prodctName:"acer 5738", basePrice:40000},
                    {prodId:103, manufacturer:"Dell", prodctName:"dell 7288", basePrice:25500},
                    {prodId:104, manufacturer:"HP", prodctName:"hp hp001", basePrice:28000} ];


let sortByProductNames = productDir.sort(function(a, b){
        if (a.prodctName < b.prodctName) {
            return -1;
        }
        if (a.prodctName > b.prodctName) {
            return 1;
        }
        return 0; 
});

console.log("---------------- Sort By Productname -----------------");
for(let p of sortByProductNames){

    console.log(p);
}

console.log("---------------- Search By Productname -----------------");
var searchByProdName = productDir.filter((obj1) => {
    var pronm = obj1.prodctName;
    if (pronm == "acer 5738") {
    
        return pronm;
    }
});