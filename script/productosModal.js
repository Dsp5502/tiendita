const showProductosModal = async (arrProd, card) => {
  const productos = await arrProd;
  card.innerHTML = '';
  productos.forEach((producto) => {
    const { nombre, precio, imagen, id } = producto;
    card.innerHTML += `
    <div  class="productsOfer">
      <div class="card">
            <h6 class="dto">32% dto</h6>
            <img src=${imagen} alt="" />
            <div class="descripCard">
              <p class="precio">${precio}/kg</p>
              <p class="descripcion">${nombre}</p>
            </div>
            <button   id=${id} class="btnModal1" data-mdb-toggle="modal"
              data-mdb-target="#exampleModal">agregar</button>
      </div>
    </div>
    `;
  });
};

export default showProductosModal;
