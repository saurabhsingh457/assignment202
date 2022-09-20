function prime(n){
  let factors=0;
  for(i=1;i<=n;i++){
     if(n%i==0){   
       return factors++;
      }
        return false;
   }
}
  let answer=prime(13);
 if(answer==2){
   console.log("prime");
   }else{
   console.log("not");  
}