// Array di immagini di background
const images = [
  "./img/IMG_8216-2.jpg", // Immagine 1
  "./img/img-24-4.JPG", // Immagine 2
  "./img/img-22-22.jpg",
  "./img/img-DSC_0116.jpg",
];

// Variabile per tracciare l'indice corrente
let currentIndex = 0;

// Funzione per cambiare l'immagine di background
function changeBackground() {
  const homeSection = document.getElementById("home");

  // Cambia l'immagine di background della sezione home
  homeSection.style.backgroundImage = `url(${images[currentIndex]})`;

  // Incrementa l'indice per passare alla prossima immagine
  currentIndex++;

  // Resetta l'indice se ha raggiunto la fine dell'array
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

// Cambia l'immagine ogni 5 secondi
setInterval(changeBackground, 4000);
