let list = document.querySelector('.list');
let products = [
    {
        id: 1,
        name: 'Iphone 13 pro',
        image: 'ip.png',
        price:450
    },
    {
        id: 2,
        name: 'SAMSUNG S23 Ultra ',
        image: 'sm.png',
        price:350
    },
    {
        id: 3,
        name: 'boAt Nirvanaa ',
        image: 'hp.png',
        price:80
    },
    {
        id: 4,
        name: 'Apple MacBook',
        image: 'mac.png',
        price:650
    }
];
function initApp (){
    products.forEach((value,key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('p1');
        newDiv.innerHTML = `
        <img src="${value.image}" alt="">
        <b>${value.name}</b>
        <p>$${value.price}</p>
        <button onclick="loadItems(${key})" >Add to cart</button> `
        list.appendChild(newDiv);
    })
}
initApp();




