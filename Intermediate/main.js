const checkVoter = () => {
  let ans = 17

  if (isNaN(ans)) {
    console.log('Invalid input');
  }
  else {
    ans >= 18 ? console.log('You can vote') : console.log('You can not vote');
  }
}
checkVoter();

const discountChecker = (productPrice, disPercent) => {
  if(!productPrice && !disPercent){
    console.log('both fields are required!')
  }
  else{
    const checkDis = (productPrice * disPercent) / 100
    const finalPrice = (productPrice - checkDis)
    console.log(finalPrice);
  }
}
let productPrice = 3000
let disPercent = 10
discountChecker(productPrice, disPercent);

let day = 2;

switch(day){
  case 1: console.log('Monday');
  break
  case 2: console.log('Tuesday');
  break
  case 3: console.log('Wednesday');
  break
  case 4: console.log('Thrusday');
  break
  case 5: console.log('Friday');
  break
  case 6: console.log('Saturday');
  break
  case 7: console.log('Sunday');
  break
  default: console.log('Invalid Input')
  break
}