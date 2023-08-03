// all object 
let user = {
  name:'mehedi',
  address:'cumilla',
  password:123456
}
console.log(user);
let userName = user.name;
console.log(userName);
user.name = 'hasan';
console.log(user.name);
console.log(user.keys(user));
console.log(user.value(user));