/*
১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। ,


৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো। 

৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )

*/

/*
//problem-1
console.log('first');
console.log('second');
const setTime = setTimeout(() => {
    console.log('third')

}, 3500);
console.log('fourth');
*/

/*
২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
*/

/*
const getInfo = () => {
    const number = prompt('please input your number',)
    alert(`the result is : ${parseInt(number) + 200}`);
  
}

getInfo();
*/

/*

const stopIntervalId = setInterval(() => {
    console.log(++seconds)   
    // seconds++         i++ vs ++i
    //   console.log(seconds)  
    if (seconds === 10) {
        clearInterval(stopIntervalId)
    }
}, 1000);
console.log('fifth');
console.log('sixth');
*/

/*
৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 
*/

const takeConfrim = () => {
    const takeValue = confirm('Do you want to see your website location');
    // console.log(takeValue);
    if (takeValue === true) {
        console.log(location.href)
    }
}

takeConfrim();





