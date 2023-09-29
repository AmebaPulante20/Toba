function Toca(idElementoAudio) {
    document.querySelector('idElementoAudio').play();
}
const lista = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < lista.length) {
    const tecla = lista[contador]
    const classe = tecla[contador].classList[1];
    console.log(classe);

    const idAudio = `#som_${classe}`;
    console.log(idAudio);

    tecla.onclick = function () {
        Toca(idAudio);
    }

    contador = contador + 1;
    console.log(contador);
tecla.onkeydown = function () {

    lista[contador].classList.add('ativa')
}
    tecla.onkeyup = function () {
       lista[contador].classList.remove('ativa') 
    }
    

}