// continue,  it's look like skip.
var iiii = [10, 20, 30, 40, 50]
for (var i = 0; i < iiii.length; i++) {
  var b = iiii[i]
  if (b > 30) {
    continue;
  }
  console.log(iiii[i]);
}

//.break. it is use for stoping loop when a spacific statement are true.
for (var breakStatement = 0; breakStatement < 20; breakStatement++) {
  console.log(breakStatement);
  if (breakStatement == 12) {
    break;
  }
}