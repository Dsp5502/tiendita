import getData from './getData.js';
import showData from './showdata.js';
import './modal.js';
import modalProductos from './modalProducto.js';

let carrito = [];

const urlProductos = 'https://api-prueba-productos.herokuapp.com/productos';

const cardsProductsOfer = document.getElementById('ContentCards');
const contentOferCards = document.getElementById('contentOferCards');

const numeroCarrito = document.getElementById('numeroCarrito');
const numeroProductos = document.getElementById('numeroProductos');
numeroProductos.innerText = `${carrito.length}`;
numeroCarrito.innerText = `${carrito.length}`;

const btnProducto = document.getElementById('ContentCards');
const modalHeader = document.getElementById('modal-content');
const productosCarrito = document.getElementById('productosCarrito');

document.addEventListener('DOMContentLoaded', async () => {
  const datosProd = await getData(urlProductos);
  showData(datosProd, cardsProductsOfer);
  showData(datosProd, contentOferCards);
  getLocalStorage();
  sumar();
});

btnProducto.addEventListener('click', async (e) => {
  const id = e.target.id;
  const mostrarProducto = e.target.classList.contains('btnModal1');
  if (mostrarProducto) {
    const listaProductos = await getData(urlProductos);
    const productoSelec = listaProductos.find((p) => p.id == Number(id));
    modalProductos(productoSelec, modalHeader);
    const btnModal1 = document.querySelector('.addCart');
    btnModal1.addEventListener('click', async (e) => {
      const numeroProductos = document.getElementById('numeroProductos');

      numeroProductos.innerText = `${carrito.length}`;
      numeroCarrito.innerText = `${carrito.length}`;
      carrito.push(productoSelec);
      localStorage.setItem('productos', JSON.stringify(carrito));
      // showCarrito(carrito, productosCarrito);
      getLocalStorage();
      sumar();
    });
  }
});

const vaciarCanasta = document.getElementById('vaciarCanasta');
vaciarCanasta.addEventListener('click', () => {
  carrito = [];
  numeroProductos.innerText = `${carrito.length}`;
  numeroCarrito.innerText = `${carrito.length}`;
  // showCarrito(carrito, productosCarrito);
  getLocalStorage();
  sumar();
  localStorage.clear();
  window.location.reload();
});

const getLocalStorage = () => {
  let carrito1 = JSON.parse(localStorage.getItem('productos'));
  console.log(carrito1);
  numeroProductos.innerText = `${carrito1.length}`;
  numeroCarrito.innerText = `${carrito1.length}`;
  productosCarrito.innerHTML = '';
  carrito1.forEach((element) => {
    const { nombre, precio, imagen, id } = element;
    productosCarrito.innerHTML += `
      <div class="productListadoCarrito">
                <img src=${imagen} alt="imagen" />
                <div class="especifiProduct">
                  <span class="nombreselectprod">${nombre}</span>
                  <p class="precioselectprod"><strong>${precio}</strong></p>
                  <div>
                  <span  id=${id} class="pesoprecio"><i> -  </i>  250g  <i>  + </i></span>
                  </div>
                </div>
              </div>
      
      `;
  });
};

const sumar = () => {
  let carritoSuma = JSON.parse(localStorage.getItem('productos'));
  let suma = 0;
  carritoSuma.forEach((element) => {
    const { precio } = element;
    const precioNuevo = Math.round(Number(precio.replace('$', '')));
    suma += precioNuevo;
    console.log(suma);
  });
  document.getElementById('total').innerHTML = `$${suma}`;
  document.getElementById('totalFinal').innerHTML = `$${suma}`;
};

const pagarya = document.getElementById('pagarya');
pagarya.addEventListener('click', () => {
  let carrito1 = JSON.parse(localStorage.getItem('productos'));
  const productosPagar = document.getElementById('productosPagar');
  productosPagar.innerHTML = '';
  carrito1.forEach((element) => {
    const { nombre, precio, imagen, id } = element;
    productosPagar.innerHTML += `
    <div class="productpagarCont">
                <div class="imgPagarProduct">
                  <img src=${imagen} alt="" />
                </div>
                <div class="container-rigth">
                  <div class="content-right">
                    <p class="nombre-rigth">${nombre}</p>
                    <p class="precio-rigth">${precio}</p>
                  </div>
                </div>
                <div  class="btonAgregar">
                  <span id=${id} class="less">-</span>
                  <span class="textAgregar">250</span>
                  <span class="plus">+</span>
                </div>
              </div>

    `;
  });
});

const btnEliminar = document.getElementById('productosPagar');

btnEliminar.addEventListener('click', (e) => {
  const id = e.target.id;
  let carritoeli = JSON.parse(localStorage.getItem('productos'));
  const buscar = carritoeli.find((data) => data.id === id);

  carritoeli.forEach((element, index) => {
    if (element.id === buscar.id) {
      carritoeli.splice(index, 1);
      localStorage.setItem('productos', JSON.stringify(carritoeli));
      getLocalStorage();
    }
  });
});
