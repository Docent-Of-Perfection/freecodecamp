//spaghetti
//equivalent code in python: 'str.title()'
function titleCase(str) {
  returnThis = [];
  arr = str.split(" ");
  console.log(arr);
  for(x=0;x<arr.length; x++){
    mod = arr[x].split("");
    mod[0] = mod[0].toUpperCase();
    mod.push(" ");
    returnThis.push(mod[0]);
    
    for(i=1;i<mod.length;i++){
      
      mod[i] = mod[i].toLowerCase();
      returnThis.push(mod[i]);
    }
  }
  returnThis.pop();
  return returnThis.join("");
}

titleCase("I'm a little tea pot");
