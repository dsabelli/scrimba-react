async function getCategories() {
  let res = await fetch("https://jservice.io/api/categories?count=4");
  let data = await res.json();
  console.log(data);
}
getCategories();
