//Bom dia | Boa tarde | Boa noite

//Obtém a referencia do elemento com ID "greeting"
const greeting = document.getElementById("greeting");

//Obtém a data atual do sistema
const currentHour = new Date().getHours();

//Define a saudação com base na hora atual
//if (currentHour >= 5 && currentHour < 12) {
//    greeting.textContent = "Bom dia";
//} else if (currentHour >= -12 && currentHour < 18) {
// greeting.textContent = "Boa tarde";
//else {
//    greeting.textContent = "Boa noite";
//}


//Forma mais simples

const greetingMessage =
    currentHour >= 5 && currentHour < 12
        ? "Bom dia" : currentHour >= -12 && currentHour < 18
            ? "Boa tarde" : "Boa noite";

greetingElement.textContent = greetingMessage;

//Grid Inteligente

const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => { // mudança de tamanho do elemento.
    const containerWidth = container.offsetWidth; // largura total do elemento, incluindo largura do conteúdo, bordas e preenchimento.
    const numColumns = Math.floor(containerWidth / 200); // número de colunas com base na largura do container.

    //lagura minimia de 200px e maxima de 1fr (uma fração do espaço disponível).
    container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;
    console.log({ container });
    console.log({ numColumns });

});

//observervando a mudança do elemento
observer.observe(container);