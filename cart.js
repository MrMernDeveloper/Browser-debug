const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
const addProduct = () => {
    // console.log('click')
    const product = getInputValueById('product-name-field');
    
    const quentity = getInputValueById('Product-quentity-field')
    console.log(product, quentity);
    // displayProduct(product, quentity)
    // localStorage.setItem(product,quentity)
    saveIteamToLocalStorage(product, quentity);

}



const getCartFromLs= () => {
    let saveCart = localStorage.getItem('cart');
    let cart = {};
    if (saveCart) {
        cart = JSON.parse(saveCart);
    }
    return cart;
}


const saveIteamToLocalStorage = (product, quentity) => {
    const cart = getCartFromLs();
    // add product  to the object property
    cart[product] = quentity;
    const cartStringified = JSON.stringify(cart);

    // save to local storage 
    localStorage.setItem('cart', cartStringified);

}

// const displayProduct = (product, quentity) => {
//     const ulContainer = document.getElementById('product-container');
//     const li = document.createElement('li')
//     li.innerText = `${product} : ${quentity}`
//     ulContainer.appendChild(li);

// }
// const displayStoredProducts = () => {
//     const cart = getCartFromLs();
//     for (const product in cart) {
//         const quantity = cart[product]
//         console.log(product, quantity)
//         displayProduct(product,quantity)
//     }
   
// }

// displayStoredProducts();
