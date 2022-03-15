if (document.getElementById('btnModal')) {
  let modal = document.getElementById('myModal');
  let btn = document.getElementById('btnModal');
  let cerrar = document.getElementsByClassName('close')[0];
  let body = document.getElementsByTagName('body')[0];

  btn.onclick = function () {
    modal.style.display = 'block';

    body.style.position = 'static';
    body.style.height = '100%';
    body.style.overflow = 'hidden';
  };

  cerrar.onclick = function () {
    modal.style.display = 'none';

    body.style.position = 'inherit';
    body.style.height = 'auto';
    body.style.overflow = 'visible';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';

      body.style.position = 'inherit';
      body.style.height = 'auto';
      body.style.overflow = 'visible';
    }
  };
}

// ----------------------------------------------------------------
if (document.getElementById('btnModal1')) {
  var modal1 = document.getElementById('myModal1');
  var btn1 = document.getElementById('btnModal1');
  var span1 = document.getElementsByClassName('close')[1];
  var body = document.getElementsByTagName('body')[1];

  btn1.onclick = function () {
    modal1.style.display = 'block';

    body.style.position = 'static';
    body.style.height = '100%';
    body.style.overflow = 'hidden';
  };

  span1.onclick = function () {
    modal1.style.display = 'none';

    body.style.position = 'inherit';
    body.style.height = 'auto';
    body.style.overflow = 'visible';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';

      body.style.position = 'inherit';
      body.style.height = 'auto';
      body.style.overflow = 'visible';
    }
  };
}
