const quantityItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${quantityItems.length}`);

quantityItems.forEach((item) => {
  const title = item.querySelector("h2");
  console.log(title.textContent);

  const element = item.querySelectorAll("li");
  console.log(element.length);
});
