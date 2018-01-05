
//Most of my problems with this one were based on my lack of understanding basic mathematics

function factorialize(num) {
  
answer = 1;
  for(x=2;x<=num;x++){
    answer *= x;
    console.log(answer + " *= " + x)
  }
 return answer;
}

/*WORKING CODE IN PYTHON
I lazied out on making this work in a real for loop, I'm used to JS syntax and ultimately opted to just import the builtin from math

from math import factorial
def factori(n):
        return factorial(n)
n=int(input("Input a number to compute the factiorial : "))
print(factori(n))
*/
