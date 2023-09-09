const images = ["0.jpg","1.jpg","2.jpg"];
const chosenImages = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;
bgImage.classList.add("bg_img");

document.body.prepend(bgImage);