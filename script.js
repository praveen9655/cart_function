let list = document.getElementById('list');
let listCart = document.getElementById('listCart');
let orB = document.getElementById('orB');
let toTal = document.getElementById('total');
let cartBtn = document.querySelector('.mainBtn');
let col_2 = document.querySelector('.col_2');
let totel =0;
let products = [
    {
        id: 1,
        name: 'Iphone 13',
        image: 'ip.png',
        price:450
    },
    {
        id: 2,
        name: 'S23 Ultra ',
        image: 'sm.png',
        price:350
    },
    {
        id: 3,
        name: 'boAt Nirv',
        image: 'hp.png',
        price:80
    },
    {
        id: 4,
        name: 'MacBook',
        image: 'mac.png',
        price:650
    },
    {
        id: 5,
        name: 'HP 15s',
        image: 'lap.png',
        price:300
    },
    {
        id: 6,
        name: 'Canon EOS ',
        image: 'cam.png',
        price:150
    },
    {
        id: 7,
        name: 'Lenovo Q24i',
        image: 'moni.png',
        price:85
    },
    {
        id: 8,
        name: 'realme Buds',
        image: 'buds.png',
        price:70
    },
    {
        id: 9,
        name: 'OnePlus 50Y1S',
        image: 'tv.png',
        price:180
    },
];
function initApp(){
    products.forEach((value,key)=> {
        let newDiv=document.createElement('div');
        newDiv.classList.add('p1');
        newDiv.innerHTML=`
        <img src="${value.image}" alt="">
        <b>${value.name}</b>
        <p>$${value.price}</p>
        <button onClick="addItem(${key})">Add to cart</button>`
        list.appendChild(newDiv);
    })

}
initApp();
function addItem(key){
    let value = products[key];
        let newLi = document.createElement('li');
        newLi.classList.add('cRl');
        newLi.innerHTML=`
        <img width="60px" src="${value.image}" alt="">
        <b>${value.name}</b>
        <p>$${value.price}</p>
        <img onClick="removeLi(event,${key})" src="dele.svg" alt="">`
        listCart.appendChild(newLi);
        totel += value.price;
        toTal.innerHTML= totel;
        orB.style = ` display: block;`
}
function removeLi(event,key) {
    let value = products[key];
    let listItem = event.target.parentElement;
    totel -= value.price;
    toTal.innerHTML = totel;
    listItem.remove();
}

function carB(){
    col_2.style =`@media (max-width : 900px){
        .col_2{
            display: block;
        }
    }`;
}
  cartBtn.addEventListener('click',function() {
    if(col_2.style.display == 'none'){
        col_2.style.display='block';
    }
    else{
        col_2.style.display='none'
    }
});

