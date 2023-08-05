let a = 7;
let b = 2;
let c = 9;


//with if else
function findmax(a, b, c){
      if(a>b && a>c){
            console.log('a is big than b c');
      }else if(b>a && b>c){
            console.log('b is big than b c');
      }else if(c>b && c>a){
            console.log('c is big than b c');
      }
}
findmax(a, b, c)