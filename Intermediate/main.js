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