 function loadingBar(percentage){
  let bar = "";

  for (let index = 1; index < 100; index+=10) {
    
    if(index < percentage)
    bar+="%";
    else bar+="."
  }

  if(percentage === 100){
  console.log('100% complete')
  console.log(`[${bar}]`)
  } else {
    console.log(`${percentage}% [${bar}]`)
  console.log("Still loading...");
  }
}

loadingBar(100)