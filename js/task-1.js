const ulElem = document.querySelector("#categories");

const categoriesLength = ulElem.children.length;
console.log(`Number of categories: ${categoriesLength}`);

const itemsElem = document.querySelectorAll(".item");
itemsElem.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
