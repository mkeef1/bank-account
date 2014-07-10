var prompt = require('sync-prompt').prompt;


var balance = prompt('What is your bank account balanace?');
balance = parseInt(balance);
var deposits = []
var response = prompt('Enter deposits made or (q)uit: ');
while(response != 'q'){
  response = parseInt(response);
  deposits.push(response);
  response = prompt('Enter deposits made or (q)uit: ');
}
var withdrawls = []
  var response2 = prompt('Enter withdrawls made and then (q)uit: ');
  while(response2 != 'q'){
    response2 = parseInt(response2);
    withdrawls.push(response2);
    response2 = prompt('Enter withdrawls made and then (q)uit: ');
  }

var depositssum = 0;
for(var k = 0; k < deposits.length; k++){
  depositssum += deposits[k];
}

var withdrawlssum = 0;
for(var l = 0; l < withdrawls.length; l++){
  withdrawlssum += withdrawls[l];
}

var newbalance = (balance + depositssum - withdrawlssum);
newbalance = parseInt(newbalance);
if (newbalance <= 0){
  var penalty = (newbalance - 50);
  console.log('Uh Oh! Your balance is 0 or below and you have been charged at $50 fee ', penalty);
}else{

console.log('Your new balance is: ', newbalance);
}

