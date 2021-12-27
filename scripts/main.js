const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!';
document.querySelector('h1').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}
