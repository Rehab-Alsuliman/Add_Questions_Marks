function QuestionsMarks(str) { 

  // code goes here 
   let result = str.split('???');

   if(result.length >= 3){
     return true;
   }
   else{
     return false;
   }

}
