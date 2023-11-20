function Toca(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < lista.length) {
    const tecla = lista[contador];
    const classe = tecla.classList[1];
    //console.log(classe);

    const idAudio = `#som_${classe}`;
    //console.log(idAudio);

    lista[contador].onclick = function () {
        Toca(idAudio);
    }

    contador = contador + 1;
    //console.log(contador);
tecla.onkeydown = function (evento) {
    
    tecla.classList.add('ativa');
    console.log(evento.code === 'Space' || evento.code === 'Enter');
    
}
    tecla.onkeyup = function () {
       tecla.classList.remove('ativa');
    }
}


function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

