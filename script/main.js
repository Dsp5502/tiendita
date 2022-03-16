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

const numeroProductos = document.getElementById('numeroProductos');
numeroProductos.innerText = `${carrito.length}`;
console.log(numeroProductos);

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
    btnModal1.addEventListener('click', async (e) => {
      carrito.push(productoSelec);
      console.log('hola');
      console.log(carrito);
      showCarrito(carrito, productosCarrito);
      const numeroProductos = document.getElementById('numeroProductos');
      numeroProductos.innerText = `${carrito.length}`;
      console.log(numeroProductos);
    });
  }
});

// const renderizarCarrito = async () => {
//   productosCarrito.textContent = '';
//   const datosProd = await getData(urlProductos);
//   const carritoSinDuplicados = [...new Set(carrito)];
//   carritoSinDuplicados.forEach((producto) => {
//     const miProducto = datosProd.filter((productoBD) => {
//       return productoBD.id === Number(producto);
//     });
//     const unidadeItem = carrito.reduce((total, itemid) => {
//       return itemid === producto ? (total += 1) : total;
//     });
//     productosCarrito.textContent = `${unidadeItem} x ${miProducto.nombre} - ${miProducto.precio}`;
//   });
// };

console.log({ carrito });
