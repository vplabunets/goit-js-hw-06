const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesList = document.querySelector(".gallery");
const ulList = images
  .map(
    (image) =>
      `<li class = 'imageitem'><img src ='${image.url}' alt = '${image.alt}'></li>`
  )
  .join("");
imagesList.insertAdjacentHTML("afterbegin", ulList);

// const imagesList = document.querySelector(".gallery");
// const makeImageCard = (images) => {
//   const imageEl = document.createElement("li");
//   imageEl.insertAdjacentHTML(
//     "afterbegin",
//     `<img src ='${images.url}' alt = '${images.alt}' width = '800'>`
//   );
//   return document.querySelector(".gallery").append(imageEl);
// };

// const imagesList = document.querySelector(".gallery");
// const imagesList2 = images.reduce((listOfImages = [], image) => {
//   listOfImages.push(
//     `<li ><img class = 'imageelement' src ='${image.url}' alt = '${image.alt}' width = '100'></li>`
//   );

//   return listOfImages.join("");
// }, []);

// imagesList.insertAdjacentHTML("afterbegin", imagesList2);
