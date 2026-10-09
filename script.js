const list = document.getElementById("posts");

function showPosts(data) {
  data.slice(0, 20).forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.title;
    list.appendChild(li);
  });
}

const cached = localStorage.getItem("posts");

if (cached) {
  console.log("Data cache se aaya (fast)");
  showPosts(JSON.parse(cached));
} else {
  console.log("Data server se aaya (pehli baar)");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("posts", JSON.stringify(data));
      showPosts(data);
    });
}