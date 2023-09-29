function Toca(idElementoAudio) {
    document.querySelector('idElementoAudio').play();
}
const lista = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < lista.length) {
    
    const classe = lista[contador].classList[1];
    console.log(classe);

    const idAudio = `#som_${classe}`;
    console.log(idAudio);

    lista[contador].onclick = function () {
        Toca(idAudio);
    }

    contador = contador + 1;
    console.log(contador);

}