function prime(num){
  let factors=0;
  for(i=1;i<=num;i++){
     if(num%i==0){   
       return factors++;
      }
        return false;
   }
}
  let answer=prime(13);
 if(answer==2){
   console.log(num,"prime");
   }else{
   console.log(num,"not prime");  
}