
//Most of my problems with this one were based on my lack of understanding basic mathematics

function factorialize(num) {
  
answer = 1;
  for(x=2;x<=num;x++){
    answer *= x;
    console.log(answer + " *= " + x)
  }
 return answer;
}

