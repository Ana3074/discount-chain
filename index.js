
// should have a grand total of $65
// discount $10 off total refills with coupon

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};
// should have a grand total of $37.5
// 25% discount will apply after the refill total has been calculated


const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}
// should have a grand total of $102.5
// 25% off - $10 off the totalsales with both subscription & coupon discount 

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//testing

// let pricePerRefill = 30;
// let refills = 5;
// let coupon = false;
// let subscription = false;
const allusers = [rocky, sarah, timmy];
for (let user of allusers) {
    if (user.coupon === true && user.subscription === false) {
        console.log((user.pricePerRefill * user.refills) - 10);
    } else if (user.subscription === true && user.coupon === false) {
        console.log(user.pricePerRefill * user.refills * .75);
    } else if (user.coupon === false && user.subscription === false) {
        console.log(user.pricePerRefill * user.refills);
    } else if (user.coupon === true && user.subscription === true) {
        console.log((user.pricePerRefill * user.refills * .75) - 10)
    }
}


