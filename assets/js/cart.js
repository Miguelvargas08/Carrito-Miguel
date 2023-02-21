/*CARRITO*/

/*BASE DE DATOS*/
const db = [
    {
        id:1,
        name: 'Card',
        Price: 400,
        Image: "assets/img/card1.PNG",
        category: 'Cards',
        quantity: 4,
    },
    {
        id:2,
        name: 'Card',
        Price: 600,
        Image: "assets/img/card2.PNG",
        category: 'Cards',
        quantity: 4,
    },
    {
        id:3,
        name: 'Card',
        Price: 500,
        Image: "assets/img/card3.PNG",
        category: 'Cards',
        quantity: 4
    },
    {   id:4,
        name: 'Pack',
        Price: 1500,
        Image: "assets/img/pack1.PNG",
        category: 'Packs',
        quantity: 4
    },
    {
        id:5,
        name: 'Pack',
        Price: 1500,
        Image: "assets/img/pack 2.PNG",
        category: 'Packs',
        quantity: 4
    },
    {
        id:6,
        name: 'Pack',
        Price: 2500,
        Image: "assets/img/pack3.PNG",
        category: 'Packs',
        quantity: 4
    },
];

const products = window.localStorage.getItem('productsDB') ? JSON.parse(window.localStorage.getItem('productsDB')) : db

/*Pintar productos Dom*/ 
const productContainer = document.getElementById
('product__content')
function printProducts() {
    let html = ''
    for (const product of products) {
         html += `
         <article class="products__card cards">
         <div class="products__shape">
           <img src="${product.image}" alt="${product.name}" class="products__img">
         </div>

         <div class="products__data">
           <h2 class="products__name">${product.name}</h2>
           <div class="">
             <h3 class="products__price">$${product.price}</h3>
             <span class="products__quantity">Quedan solo ${product.quantity} unidades</span>
           </div>
           <button type="button" class="button products__button addToCart" data-id="${product.id}">
             <i class="bx bx-plus"></i>
           </button>
         </div>
       </article>

       <article class="products__card cards">
         <div class="products__shape">
           <img src="${product.image}" alt="${product.name}" class="products__img">
         </div>

         <div class="products__data">
           <h2 class="products__name">${product.name}</h2>
           <div class="">
             <h3 class="products__price">${product.price}</h3>
             <span class="products__quantity">Quedan solo ${product.quantity} unidades</span>
           </div>
           <button type="button" class="button products__button addToCart" data-id="${product.id}">
             <i class="bx bx-plus"></i>
           </button>
         </div>
       </article>

       <article class="products__card cards">
         <div class="products__shape">
           <img src="${product.image}" alt="${product.name}" class="products__img">
         </div>

         <div class="products__data">
           <h2 class="products__name">${product.name}</h2>
           <div class="">
             <h3 class="products__price">${product.price}</h3>
             <span class="products__quantity">Quedan solo ${product.quantity} unidades</span>
           </div>
           <button type="button" class="button products__button addToCart" data-id="${product.id}">
             <i class="bx bx-plus"></i>
           </button>
         </div>
       </article>

       <article class="products__card packs">
       <div class="products__shape">
         <img src="${product.image}" alt="${product.name}" class="products__img">
       </div>

       <div class="products__data">
         <h2 class="products__name">${product.name}</h2>
         <div class="">
           <h3 class="products__price">${product.price}</h3>
           <span class="products__quantity">Quedan solo ${product.quantity} unidades</span>
         </div>
         <button type="button" class="button products__button addToCart" data-id="${product.id}">
           <i class="bx bx-plus"></i>
         </button>
       </div>
     </article>

     <article class="products__card packs">
       <div class="products__shape">
         <img src="${product.image}" alt="${product.name}" class="products__img">
       </div>

       <div class="products__data">
         <h2 class="products__name">${product.name}</h2>
         <div class="">
           <h3 class="products__price">${product.price}</h3>
           <span class="products__quantity">Quedan solo ${product.quantity} unidades</span>
         </div>
         <button type="button" class="button products__button addToCart" data-id="${product.id}">
           <i class="bx bx-plus"></i>
         </button>
       </div>
     </article>

     <article class="products__card packs">
       <div class="products__shape">
         <img src="${product.image}" alt="${product.name}" class="products__img">
       </div>

       <div class="products__data">
         <h2 class="products__name">${product.name}</h2>
         <div class="">
           <h3 class="products__price">${product.price}</h3>
           <span class="products__quantity">Quedan solo ${product.quantity} unidades</span>
         </div>
         <button type="button" class="button products__button addToCart" data-id="${product.id}">
           <i class="bx bx-plus"></i>
         </button>
       </div>
     </article>
         `; 
    }
    productContainer.innerHTML = html
    window.localStorage.setItem('productsDB', JSON.stringify(products))
}

printProducts()

/*Carrito*/
let cart = window.localStorage.getItem('cartDB') ? JSON.parse (window.localStorage.getItem('cartDB')) : [];
const cartContainer = document.getElementById('cart__container')
const cartCount = document.getElementById('cart__count')
const itemsCount = document.getElementById('items__count')
const cartTotal = document.getElementById('cart__total')
function printCart() {
    let html = ''
    for (const article of cart) {
        const product = products.find(p => p.id === article.id)
        html += `
        <article class="cart__card">
        <div class="cart__box">
          <img src="${product.image}" alt="${product.name}" class="cart__img">
        </div>

        <div class="cart__details">
          <h3 class="cart__title">card <span class="cart__price">$${product.price}</span></h3>

          <div class="cart__amount">
            <div class="cart__amount-content">
              <span class="cart__amount-box removeToCart" data-id="${article.id}">
                <i class="bx bx-minus"></i>
              </span>

              <span class="cart__amount-number">${article.qty}</span>

              <span class="cart__amount-box addToCart" data-id="${article.id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>

            <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${article.id}"></i>
          </div>

          <span class="cart__subtotal">
            <span class="cart__stock">Quedan ${product.quantity - article.qty} unidades</span>
            <span class="cart__subtotal-price">${product.price * article.qty}</span>
          </span>
        </div>
        </article>

        <article class="cart__card">
        <div class="cart__box">
          <img src="${product.image}" alt="${product.name}" class="cart__img">
        </div>

        <div class="cart__details">
          <h3 class="cart__title">Card <span class="cart__price">$${product.price}</span></h3>

          <div class="cart__amount">
            <div class="cart__amount-content">
              <span class="cart__amount-box removeToCart" data-id="${article.id}">
                <i class="bx bx-minus"></i>
              </span>

              <span class="cart__amount-number">${article.qty}</span>

              <span class="cart__amount-box addToCart" data-id="${article.id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>

            <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${article.id}"></i>
          </div>

          <span class="cart__subtotal">
            <span class="cart__stock">Quedan ${product.quantity - article.qty} unidades</span>
            <span class="cart__subtotal-price">${product.price * article.qty}</span>
          </span>
        </div>
        </article>

        <article class="cart__card">
        <div class="cart__box">
          <img src="${product.image}" alt="${product.name}" class="cart__img">
        </div>

        <div class="cart__details">
          <h3 class="cart__title">Card <span class="cart__price">$${product.price}</span></h3>

          <div class="cart__amount">
            <div class="cart__amount-content">
              <span class="cart__amount-box removeToCart" data-id="${article.id}">
                <i class="bx bx-minus"></i>
              </span>

              <span class="cart__amount-number">${article.qty}</span>

              <span class="cart__amount-box addToCart" data-id="${article.id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>

            <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${article.id}"></i>
          </div>

          <span class="cart__subtotal">
            <span class="cart__stock">Quedan ${product.quantity - article.qty} unidades</span>
            <span class="cart__subtotal-price">${product.price * article.qty}</span>
          </span>
        </div>
        </article>

        <article class="cart__card">
        <div class="cart__box">
          <img src="${product.image}" alt="${product.name}" class="cart__img">
        </div>

        <div class="cart__details">
          <h3 class="cart__title">Pack <span class="cart__price">$${product.price}</span></h3>

          <div class="cart__amount">
            <div class="cart__amount-content">
              <span class="cart__amount-box removeToCart" data-id="${article.id}">
                <i class="bx bx-minus"></i>
              </span>

              <span class="cart__amount-number">${article.qty}</span>

              <span class="cart__amount-box addToCart" data-id="${article.id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>

            <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${article.id}"></i>
          </div>

          <span class="cart__subtotal">
            <span class="cart__stock">Quedan ${product.quantity - article.qty} unidades</span>
            <span class="cart__subtotal-price">${product.price * article.qty}</span>
          </span>
        </div>
       /article>

        <article class="cart__card">
        <div class="cart__box">
          <img src="${product.image}" alt="${product.name}" class="cart__img">
        </div>

        <div class="cart__details">
          <h3 class="cart__title">Pack <span class="cart__price">$${product.price}</span></h3>

          <div class="cart__amount">
            <div class="cart__amount-content">
              <span class="cart__amount-box removeToCart" data-id="${article.id}">
                <i class="bx bx-minus"></i>
              </span>

              <span class="cart__amount-number">${article.qty}</span>

              <span class="cart__amount-box addToCart" data-id="${article.id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>

            <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${article.id}"></i>
          </div>

          <span class="cart__subtotal">
            <span class="cart__stock">Quedan ${product.quantity - article.qty} unidades</span>
            <span class="cart__subtotal-price">${product.price * article.qty}</span>
          </span>
        </div>
      </article>

      <article class="cart__card">
        <div class="cart__box">
          <img src="${product.image}" alt="${product.name}" class="cart__img">
        </div>

        <div class="cart__details">
          <h3 class="cart__title">Pack <span class="cart__price">$${product.price}</span></h3>

          <div class="cart__amount">
            <div class="cart__amount-content">
              <span class="cart__amount-box removeToCart" data-id="${article.id}">
                <i class="bx bx-minus"></i>
              </span>

              <span class="cart__amount-number">${article.qty}</span>

              <span class="cart__amount-box addToCart" data-id="${article.id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>

            <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${article.id}"></i>
          </div>

          <span class="cart__subtotal">
            <span class="cart__stock">Quedan ${product.quantity - article.qty} unidades</span>
            <span class="cart__subtotal-price">${product.price * article.qty}/span>
          </span>
        </div>
      </article>
        `
        console.log(article)
    }
    cartContainer.innerHTML = html
    cartCount.innerHTML = totalArticles()
    itemsCount.innerHTML = totalArticles()
    cartTotal.innerHTML = numberToCurrency(totalAmount());
    checkButtons();
    window.localStorage.setItem('cartDB', JSON.stringify(cart))
 }

 printCart(); 
/*Agregar al carrito*/
function addToCart(id, qty = 1) {
    const product = products.find(p => p.id === id);
    if (product && product.quantity > 0) {
        const article = cart.find (a => a.id === id);
    
        if (article) {
           if (checkStock(id, qty + article.qty)) {
             article.qty++;
           } else {
             window.alert('No hay stock suficiente');
           }
    }   else {
        card.push({id, qty});
    }
  } else {
    window.alert('Producto agotado');
  }
  printCart()
}

function checkStock(id, qty) {
    const product = products.find(p => p.id === id);
    return product.quantity - qty >=0
}
/*REMOVER ARTICULOS*/
function removeFromCart(id, qty = 1) {
    const article = cart.find((a) => a.id === id);

    if  (article && article.qty - qty > 0) {
        article.qty--;
    }   else {
        const confirm = window.confirm('¿Estas Seguro?');
        if (confirm) {
         cart = cart.filter(a =>a.id !== id);
        }
    }
    printCart()
} 

/*ELIMINAR DEL CARRITO*/
function deleteFromCart(id) {
    const article = cart.find((a) => a.id === id);
    cart.splice(cart.indexOf(article), 1);
    printCart()
}

/*CONTAR ARTÍCULOS*/
function totalArticles() {
    return cart.reduce((acc,article) => acc + article.qty, 0);
}

/*TOTAL*/ 
function totalAmount() {
    return cart.reduce((acc, article) => {
        /*Primero recorre los productos, la base de datos para traer las propiedades y luego busca al producto por su id y lo hace coincidir con el articulo, so lo encientra multiplica el precio del producto por la cantidad de articulos del carrito */
        const product = products.find((p) => p.id === article.id);
        return acc + product.price * article.qty;
    }, 0);
}

/*Limpiar Carrito*/
function clearCart() {
    cart = [];
    printCart()
}

/*COMPRAR*/
function chechout(){
  cart.forEach(article =>{
    const product = products.find(p =>p.id === article.id)

    product.quantity -= article.qty;
  });
  clearCart();
  printProducts();
  printCart();
  window.alert('Gracias por su compra que tenga un exelente dia');
}

function checkButtons() {
  if (cart.length > 0) {
    document.getElementById('cart-checkout').removeAttribute('disabled')
    document.getElementById('cart-empty').removeAttribute('disabled')
  } else {
    document.getElementById('cart-checkout').setAttribute('disabled', 'disabled')
    document.getElementById('cart-empty').setAttribute('disabled', 'disabled')
  }
}

function numberToCurrency (value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value)
}

/*AGREGANDO EVENTOS A NUESTROS BOTONES*/
productContainer.addEventListener('click', function (e) {
    const add = e.target.closest('.addToCart')

    if (add) {
        const id = +add.dataset.id
        addToCart(id)
    }
})

cartContainer.addEventListener('click', function (e) {
    const remove = e.target.closest('.removeToCart')
    const add = e.target.closest('.addToCart')
    const deleteCart = e.target.closest('.deleteToCart')

    if (remove) {
        const id = +remove.dataset.id
        removeFromCart(id)
    }

    if (add) {
        const id = +add.dataset.id
        addToCart(id)
    }

    if (deleteCart) {
        const id = +deleteCart.dataset.id
        deleteFromCart(id)
    }
})

const actionButtons = document.getElementById('action-buttons')

actionButtons.addEventListener('click', function (e) {
    const clear = e.target.closest('#cart-empty')
    const buy = e.target.closest('#cart-checkout')

    if (clear) {
       clearCart()
    }

    if (buy) {
       chechout()
    }
})