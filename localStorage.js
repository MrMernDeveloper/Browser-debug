document.getElementById('btn-add-name').addEventListener('click', function () {
    // console.log('clicked')
    const textField = document.getElementById('name-field');
    nameValue = textField.value;
    // console.log(result)
    localStorage.setItem('name', nameValue)
})

document.getElementById('btn-add-age').addEventListener('click', function () {
    // console.log('cliked') 
    const ageText = document.getElementById('age-field')
    const ageValue = ageText.value;
    console.log(ageValue);
    localStorage.setItem('age', ageValue);
})
document.getElementById('btn-remove-name').addEventListener('click', function () {
    localStorage.removeItem('name')
})
document.getElementById('btn-remove-age').addEventListener('click', function () {
    localStorage.removeItem('age')
})
document.getElementById('btn-clear-all').addEventListener('click', function () {
    localStorage.clear()
})