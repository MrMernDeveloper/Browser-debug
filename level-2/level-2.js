// console.log('connnected')

const increaseValue = () => {
    const textValue = document.getElementById('count-initial')
    const countValue = parseInt(textValue.innerText);
    textValue.innerText = countValue + 1; 
    saveCount('number', textValue.innerText)


  
    // console.log(countValue);

    

}

const saveCount = (number, value) => {
    localStorage.setItem(number,value)
}
const displayCount = () => {
    const previousValue = document.getElementById('count-initial');   
 updateValue = localStorage.getItem('number')
    const result = parseInt(updateValue);
    previousValue.innerText = result;
    
    
    
}
displayCount(); 