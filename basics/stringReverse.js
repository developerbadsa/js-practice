let str = 'i am developer';

//for make array reverse
function makeReverse(str){
      let reversed = '';
      for(let i = str.length-1;i >= 0;i--){
            reversed =reversed + str[i];
            
      }
      console.log(reversed)
}

makeReverse(str)