function prime(num){
  let factors=0;
  for(i=1;i<=num;i++){
     if(num%i==0){  
        factors++;
      }
  }
    if(factors==2){
      return true;
    }
    return false;
   
}
  let answer=prime(14);
 if(answer==true){
   console.log("prime");
   }else{
   console.log("not prime");  
}