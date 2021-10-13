const listEl = document.querySelector("#categories");

const itemsListEl = document.querySelectorAll(".item");
console.log("number of categories:", itemsListEl.length);

itemsListEl.forEach((element) => {
  element.firstElementChild.textContent;
  element.lastElementChild.children.length;
  const title = element.querySelector("h2").innerHTML;
  const itemsLength = element.querySelectorAll("li").length;

  console.log(`category: ${title}`);
  console.log(`elements: ${itemsLength}`);
});
