 function passwordValidator(input){
const errors =  [];

   if(input.length < 6 || input.length > 10){
    errors.push("Password must be between 6 and 10 characters");
   }
   if(!input.match(/^[A-Za-z0-9]+$/)){
    errors.push("Password must consist only of letters and digits")
   }
   if(!input.match(/(\D*\d){2,}/)){
    errors.push("Password must have at least 2 digits")
   }

   if(errors.length > 0){
    console.log(errors.join("\r\n"))
    
   } else console.log("Password is valid")
}

passwordValidator('Pa$s$s')