
var tarjetaId = 0;
function clonar() {
    var newTarjeta = generarTarjetaNueva();

    var tarjetas = document.getElementById("card");

    var element = document.createElement("div");
    element.id = tarjetaId;
    element.innerHTML = newTarjeta;
    tarjetas.appendChild(element);
    tarjetaId++;

    add_or_delete();

}

function eliminar() {

    var tarjetas = document.getElementById("card");
    var ultimoElemento = tarjetas.childNodes[tarjetas.childNodes.length - 1];

    tarjetas.removeChild(ultimoElemento);
    tarjetaId--;
    add_or_delete();

}

function add_or_delete() {


    var botonAgregar = document.getElementById("Agregar");
    var botonEliminar = document.getElementById("Eliminar");
    if (tarjetaId >= 9) {
        botonAgregar.disabled = true;
       
    } else if (tarjetaId <= 0) {
        botonEliminar.disabled = true;
       
    } else {

       
        botonEliminar.disabled = false;
        botonAgregar.disabled = false;
    }


}

function generarTarjetaNueva() {
    var html =
   

   '<div class="card__head">'+

       ' <div class="card__product-img">'+
           ' <img src="./img/image-equilibrium.jpg" alt="">'+
        '</div>'+

    '</div>'+

    '<div class="card__body">'+

        '<a href="#">'+
           ' <h3 class="card__title">Equilibrium #3429</h3>'+
        '</a>'+

        '<p class="card__text">Our Equilibrium collection promotes balance and calm.</p>'+

       ' <div class="wrapper">'+

           ' <div class="card__price">'+
               ' <img src="./img/icon-ethereum.svg" alt="" class="card__icon">'+
               ' <span>0.041 ETH</span>'+
            '</div>'+

           ' <div class="card__countdown">'+
                '<img src="./img/icon-clock.svg" alt="" class="card__icon">'+
                '<span>3 days left</span>'+
          '  </div>'+

       ' </div>'+
'</div>'+


   ' <div class="card__footer">'+
       ' <img src="./img/image-avatar.png" alt="" class="card__author-img">'+

        '<p class="card__author-name"> Creation of <a href="#"> Jules Wyvern</a></p>'+


'</div>';

    return html;
}