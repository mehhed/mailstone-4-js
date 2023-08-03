// even number in while loop 
var evenNumber = 1 ;
while (oddNumber < 10){
  console.log(oddNumber, 'it is even number');
  oddNumber +=2;
}
// odd number in while loop 
var oddNumber = 1
while (oddNumber < 10) {
  console.log(oddNumber, 'it is odd number');
  oddNumber += 2 ;
}
// short way 
var short = 0 ;
while (short < 10) {
  var oddEven = short % 2; 
  if (oddEven == 0) {
    console.log(short, 'it is even number');
  }else{
    console.log(short,  ' it is odd number');
  }
  short++
}