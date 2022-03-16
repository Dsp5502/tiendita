const showCarrito = async (arrProducts, card) => {
  card.innerHTML = '';
  let productos = await arrProducts;
  productos.forEach((product) => {
    const { nombre } = product;
    card.innerHTML += `
    <div>hola estoy en el carrito</div>
    <div>${nombre}</div>
    `;
  });
};

export default showCarrito;
