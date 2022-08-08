const postBtn = document.querySelector("#post-btn");
const postTitle = document.querySelector("#post-title");
const postBody = document.querySelector("#post-body");
const newPost = document.querySelector("#new-post");
let postsArr = [];

function clearForm() {
  postTitle.value = "";
  postBody.value = "";
}

function renderPosts() {
  let blogSpace = "";
  for (let post of postsArr) {
    blogSpace += `<h3>${post.title}</h3><p>${post.body}</p><hr/>`;
  }
  document.querySelector(".blog-space").innerHTML = blogSpace;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    postsArr = data.slice(0, 5);
    renderPosts();
  });

function postEntry(e) {
  e.preventDefault();
  const blogPost = {};
  blogPost.title = postTitle.value;
  blogPost.body = postBody.value;
  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogPost),
  })
    .then((response) => response.json())
    .then((data) => {
      postsArr.unshift(data);
      renderPosts();
      clearForm();
    });
}

newPost.addEventListener("submit", postEntry);
