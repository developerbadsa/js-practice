function fcl(n){

      let result = 1;

      if(n==0 || n==1){
            result = 1
      }
      
      for(i=n;i>=1;i--){
            result = result * i;
      }
      console.log(result)
}

fcl(5)