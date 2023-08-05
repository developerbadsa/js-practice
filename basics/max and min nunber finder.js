let a = 898;
let b = 78;
let c = 3;


//with if else
function findmax(a, b, c){
      if(a>b && a>c){
            console.log('a is big than b c');
      }else if(b>a && b>c){
            console.log('b is big than a c');
      }else if(c>b && c>a){
            console.log('c is big than b a');
      }
}

function findmin(a, b, c){
      if(a<b && a<c){
            console.log('a is small than b c');
      }else if(b<a && b<c){
            console.log('b is small than a c');
      }else if(c<b && c<a){
            console.log('c is small than b a');
      }
}
// findmax(a, b, c);
// findmin(a, b, c);


// min and max finder with Math

// math max
console.log(Math.max(a,b,c))
console.log(Math.min(a,b,c))