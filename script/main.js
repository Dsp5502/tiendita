import getData from './getData.js';
import showData from './showdata.js';
import './modal.js';
import modalProductos from './modalProducto.js';
import showCarrito from './showCarrito.js';

let carrito = [];
const DOMcarrito = document.querySelector('#carrito');

const urlProductos = 'https://api-prueba-productos.herokuapp.com/productos';

const cardsProductsOfer = document.getElementById('ContentCards');
console.log(cardsProductsOfer);

const btnProducto = document.getElementById('ContentCards');
const modalHeader = document.getElementById('modal-content');
const productosCarrito = document.getElementById('productosCarrito');
console.log(productosCarrito);

document.addEventListener('DOMContentLoaded', async () => {
  const datosProd = await getData(urlProductos);
  console.log(datosProd);
  showData(datosProd, cardsProductsOfer);
});

btnProducto.addEventListener('click', async (e) => {
  const id = e.target.id;
  console.log({ id });
  const mostrarProducto = e.target.classList.contains('btnModal1');
  if (mostrarProducto) {
    const listaProductos = await getData(urlProductos);

    const productoSelec = listaProductos.find((p) => p.id == Number(id));
    console.log(productoSelec);
    modalProductos(productoSelec, modalHeader);

    const btnModal1 = document.querySelector('.addCart');
    console.log(btnModal1);
    btnModal1.addEventListener('click', (e) => {
      carrito.push(productoSelec);
      console.log('hola');
      console.log(carrito);
      showCarrito(carrito, productosCarrito);
    });
  }
});

console.log({ carrito });
