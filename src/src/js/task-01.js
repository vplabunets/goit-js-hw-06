const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);
for (let item of categories.children) {
  console.log(
    `Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`
  );
}

// const items = categories.children;
// const elementsQuantity = [];
// const elementsCategory = [];
// for (let item of categories.children) {
//   elementsCategory.push(item.firstElementChild.textContent);
//   elementsQuantity.push(item.lastElementChild.children.length);
// }
// console.log(`Number of categories: ${categories.children.length}

// Category: ${elementsCategory[0]}
// Elements: ${elementsQuantity[0]}

// Category: ${elementsCategory[1]}
// Elements: ${elementsQuantity[1]}

// Category: ${elementsCategory[2]}
// Elements: ${elementsQuantity[2]}`
// );
