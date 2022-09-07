console.log('connected');


const showAlert = () => {
    const number = Math.random() * 10;
    console.log(number);
    if (number < 5) {
        alert('number is less than 5')
    }
}

 const  askSomething = () => {
     const decition = confirm('are you comming to picnic?');
     console.log(decition);
     if (decition == true) {
         alert('dosto 500 tk bkash kor')
     }
     else {
         alert('DGM..! dure giye mor')
     }
}
const getInfo = () => {
    const name = prompt('tell us your name?')
    console.log(name)
    if (!!name) {
        console.log('welcome Here', name)
    }
}

// conditional alert
