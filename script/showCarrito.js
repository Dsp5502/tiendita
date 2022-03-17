// const showCarrito = async (arrProducts, card) => {
//   card.innerHTML = '';

//   let productosCarrito = await arrProducts;
//   const carritoSinduplicados = [...new Set(productosCarrito)];

//   productosCarrito.forEach((producto) => {
//     const { nombre, precio, imagen } = producto;
//     card.innerHTML += `
//     <div class="productListadoCarrito">
//               <img src=${imagen} alt="imagen" />
//               <div class="especifiProduct">
//                 <span class="nombreselectprod">${nombre}</span>
//                 <p class="precioselectprod"><strong>${precio}</strong></p>
//               </div>
//             </div>
//       `;
//   });
// };

// // carritoSinduplicados.forEach((product) => {
// //   const { nombre, imagen } = product;
// //   card.innerHTML += `
// //   <div>${nombre}
// //   <img src=${imagen} alt="">
// //   </div>
// //   `;
// // });

// export default showCarrito;
