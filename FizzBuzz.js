function fizzBuzz(){
for(let i = 1; i <= 150; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)){
    print('"FizzBuzz"');
  }
  else if (i % 3 === 0) {
    print('"Fizz"');
  }
  else if (i % 5 === 0){
    print('"Buzz"');
  } 
  else {
    print(i + ' ');
  } 
}
}
var result = document.getElementById('Result');

function print(output){
  result.innerHTML += output + '<br>';
}

fizzBuzz();
