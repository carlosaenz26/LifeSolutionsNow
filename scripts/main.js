const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Bienvenido!';
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/1.jpeg') {
      miImage.setAttribute('src','images/2.jpeg');
    } else {
      miImage.setAttribute('src', 'images/3.jpeg');
    }
    if (miSrc === 'images/2.jpeg') {
      miImage.setAttribute('src','images/3.jpeg');
    } else {
      miImage.setAttribute('src', 'images/2.jpeg');
    }
}



