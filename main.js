function Toca () {
    document.querySelector('#som_tecla_pom').play();
}
const lista = document.querySelectorAll('.tecla');

let contador = 0;



while (Contador < 9) {
    lista[Contador].onclick = tocar;
const classe = lista[contador].classList[1];
console.log(classe);
    Contador = Contador + 1;
    console.log(contador);
    
}