function prime(n){
  count=0;
  for(i=1;i<=n;i++){
     if(n%i==0){   
        return true;
      }
        return false;
   }
}
  let a=prime(13);
 if(a==2){
   console.log("prime");
   }else{
   console.log("not");  
}