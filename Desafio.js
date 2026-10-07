const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.Show-All')
const buttonMapAll = document.querySelector('.map-all')
let myLi = ''

function ShowAll(productsArray) {
    myLi = ''

    productsArray.forEach((product) => {
        myLi += `
                 <li>
                        <img src=${product.src}>
                        <p>${product.name}</p>
                        <p class="item-price">R$ ${product.price}</p>
                 </li>
        `
    })

    list.innerHTML = myLi
}

function MapAll() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))

    ShowAll(newPrice)
}



buttonShowAll.addEventListener('click', () => ShowAll(menuOptions))
buttonMapAll.addEventListener('click', MapAll)