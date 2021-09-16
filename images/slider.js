const images = [
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg'
];

let imgIndex = 0;
const imgElement = document.getElementById('img-slider');
 setInterval(() => {
     if(imgIndex >= images.length){
         imgIndex = 0;
     }
imgUrl = images[imgIndex];
imgElement.setAttribute('src', imgUrl);
imgIndex++;
 }, 1000)