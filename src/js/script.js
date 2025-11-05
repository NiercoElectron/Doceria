let images = [
    'src/assets/imgs/BoloDeMorango.png',
    'src/assets/imgs/Cannoli.png',
    'src/assets/imgs/Cheesecake.png',
]

let descriptions = [
    'Bolo de Morango: Delicioso bolo recheado com creme e morangos frescos.',
    'Cannoli: Tradicional doce italiano com recheio cremoso e crocante.',
    'Cheesecake: Clássico cheesecake com base crocante e cobertura de goiabada.'
]

let i = 0;
let time = 5000;

function SlideShow() {
    document.getElementById('img').src = images[i];
    document.getElementById('desc').innerText = descriptions[i];
    i++;
    if (i >= images.length) {
        i = 0;
    }
    setTimeout(SlideShow, time);
}
SlideShow();