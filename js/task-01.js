const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const categoriesArray = numberOfCategories.forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elememts:", item.querySelectorAll("li").length);
});
