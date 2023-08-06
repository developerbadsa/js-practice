
function discountCalculate(ticketQuantities){
     let regurlarTicketPrice = 100;
     let rest1TicketPrice = 90;
     let rest2TicketPrice = 70;

     if(ticketQuantities<=100){
            let ticketPrice = ticketQuantities * regurlarTicketPrice;
            console.log(ticketPrice)
     }else if(ticketQuantities<=200 && ticketQuantities>100){
            let firstPrice = regurlarTicketPrice * 100;
            let res1discount = (ticketQuantities-100) * rest1TicketPrice;
            let ticketPrice = firstPrice + res1discount;
            console.log(ticketPrice);
     }
     else if(ticketQuantities>200){
      let firstPrice = regurlarTicketPrice * 100;
      let res1discount =rest1TicketPrice * 100;
      let res2discount = (ticketQuantities-200) * rest2TicketPrice;
      let ticketPrice = firstPrice + res1discount + res2discount;
      console.log(ticketPrice);
}else{
      console.log('please insert value')
}





}


discountCalculate();