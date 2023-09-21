function Toca () {
    document.querySelector('#som_tecla_pom').play();
}
const lista = document.querySelectorAll('.tecla');

let contador = 0;



while (contador < lista.length) {
    lista[contador].onclick = Toca;
const classe = lista[contador].classList[1];
console.log(classe);
    contador = contador + 1;
    console.log(contador);
    
}