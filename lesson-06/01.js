/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
  "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg",
  "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg",
  "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg",
];

const prev = document.querySelector("#prev-button");
const next = document.querySelector("#next-button");
const image = document.querySelector("#web-tech-image");
let count = 0;
const length = WEB_TECH_IMAGES.length;

next.onclick = function () {
  image.src = WEB_TECH_IMAGES[(count + 1) % length];
  count++;
};

prev.onclick = function () {
  if (count === 0) {
    image.src = WEB_TECH_IMAGES[length - 1];
    count = length - 1;
  } else {
    image.src = WEB_TECH_IMAGES[(count - 1) % length];
    count--;
  }
};

// const prevBtn = document.getElementById("prev-button");
// const nextBtn = document.getElementById("next-button");
// const imgElement = document.getElementById("web-tech-image");
// const imgQuantity = WEB_TECH_IMAGES.length;
// let currentIndex = 0;

// nextBtn.addEventListener("click", () => {
//   if (currentIndex === imgQuantity - 1) currentIndex = -1;
//   for (let i = currentIndex + 1; i <= imgQuantity; i++) {
//     currentIndex++;
//     imgElement.setAttribute("src", WEB_TECH_IMAGES[currentIndex]);
//     return currentIndex;
//   }
// });
//
// prevBtn.addEventListener("click", () => {
//   for (let i = currentIndex - 1; i <= imgQuantity; i--) {
//     currentIndex--;
//     if (currentIndex === -1) currentIndex = imgQuantity - 1;
//     imgElement.setAttribute("src", WEB_TECH_IMAGES[currentIndex]);
//     return currentIndex;
//   }
// });
