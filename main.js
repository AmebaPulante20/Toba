function Toca(idElementoAudio) {
    document.querySelector('idElementoAudio').play();
}
const lista = document.querySelectorAll('.tecla');

let contador = 0;


while (contador < lista.length) {
    lista[contador].onclick = function () {
        Toca('#som_tecla_toim');
    }
    const classe = lista[contador].classList[1];
    console.log(classe);
    contador = contador + 1;
    console.log(contador);

}