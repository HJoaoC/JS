const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.Show-All')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')
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


function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, current) => acc + current.price, 0)


      list.innerHTML = `
         <li>
           <p> Valor total R$ ${totalValue}</p>
         </li>

    `
}
function filterVegan () {
    const veganProduct = menuOptions.filter((product) => product.vegan === true)
    
}


buttonShowAll.addEventListener('click', () => ShowAll(menuOptions))
buttonMapAll.addEventListener('click', MapAll)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click',)