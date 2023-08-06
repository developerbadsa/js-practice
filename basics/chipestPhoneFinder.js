var Phones = [
      {name:"Realme", color: "gray", price: 15000, quantity: 6},
      {name:"vivo", color: "red", price: 12000, quantity: 40},
      {name:"Infinix", color: "green", price: 19000, quantity: 34},
      {name:"Nokia", color: "Blue", price: 45000, quantity: 45}
];

      let index = Phones[0].price;
      let phoneName ;

for(i = 0; i < Phones.length; i++){

      

      if(Phones[i].price<index){
            index = Phones[i].price;
            phoneName = Phones[i].name;
            
      }
      
}
console.log(phoneName)