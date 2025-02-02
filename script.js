const messages = [
    "¿Estás segura?",
    "¿De verdad quieres decir que no?",
    "¿Segura, segura?",
    "Mi corazón se está rompiendo... ",
    "Piénsalo bien...",
    "Si dices que no, lloraré mucho...",
    "Voy a estar muy triste sin ti...",
    "No me hagas sufrir...",
    "Ok, dejaré de insistir...",
    "Es broma, di que sí por favor!❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
