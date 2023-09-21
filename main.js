function Toca () {
    document.querySelector('#som_tecla_pom').play();
}
const lista = document.querySelectorAll('.tecla');

let contador = 0;

const classe = lista[5].classList[1];
console.log(classe);

while (Contador < 9) {
    //acessano o elemento da lista
    lista[Contador].onclick = Toca;
    //contdor mudou de valor
    Contador = Contador + 1;
    console.log(contador);
}