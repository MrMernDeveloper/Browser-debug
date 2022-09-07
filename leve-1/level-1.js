// console.log('connected'); 
const addIteamsByID = id => {
    const textField = document.getElementById(id);
    const textValue = textField.value
    textField.value = ''
    return textValue;
}

const addIteams = () => {
    
    const key = addIteamsByID('key-field')
    const value = addIteamsByID('value-firld')
    // console.log(keyValue, valueValue);
    // localStorage.setItem(keyValue, valueValue)
    saveIteamToLocalStorage(key,value)
    // removeKey(keyValue);
    
}

const getAge = () => {
const age= localStorage.getItem('age')
    alert(`the age is: ${age}`)
}

const removeKey = () => {
   localStorage.removeItem('name','age')
}
const removeAge = () => {
   localStorage.removeItem('age')
}

const getObjFromLs = () => {
    let saveobj = localStorage.getItem('object');
    let object = {};
    if (saveobj) {
        object = JSON.parse(saveobj);
    }
    return object;
}


const saveIteamToLocalStorage = (key, value) => {
    const object =getObjFromLs();
    // add product  to the object property
    object[key] = value;
    const objectStringified = JSON.stringify(object);

    // save to local storage 
    localStorage.setItem('object', objectStringified);

}
