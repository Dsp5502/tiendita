const modalProductos = (producto, modal) => {
  modal.innerHTML = '';

  const { nombre, imagen, precio, id } = producto;
  modal.innerHTML = `
 <div >
      <div class="modal-content1">
        <div class="contProductSelect">
          <div class="productSelec">
            <img class="imgProdSelec" src=${imagen} alt="" />
            <div class="infoproductSelect">
              <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
              <div class="datosselec">
                <h5>${nombre}</h5>
                <span>${precio} /Kg</span>
                <p>
                  <small>Precios con IVA incluido</small>
                  <span class="spanSelect">
                    Peso aproximado por pieza, puede variar de acuerdo al peso
                    real.
                  </span>
                </p>
                <div class="selectPeso">
                  <h6>Selecciona la madurez que deseas</h6>
                  <select name="" id="">
                    <option value="">Por elegir</option>
                  </select>
                </div>
                <div class="pesoAgregar">
                  <button  class="btn-peso">- 250 +</button>
                  <button id=${id} class="btn-Agregar addCart">Agregar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     

    
  
  
  `;
};

export default modalProductos;
