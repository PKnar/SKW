(function () {
  "use strict";
  const blogList = document.querySelector(".blog-list");
  const blogURL = "https://saunakoning.herokuapp.com/api/blogs";

  async function getData(url) {
    let response = await fetch(url);
    let json = await response.json();
    return json;
  }

  async function generateBlog() {
    let blogs = await getData(blogURL);

    //get last 3 blogs
    blogs = blogs.slice(-3);

    blogs.forEach((blog) => {
      let html = `<div id= ${blog.id} class="blog-post">
    <p class="dates">${blog.date}</p>
    <div class='blog-cover'>  <h4>${blog.title}</h4> </div>
    <p class="blog-preview"> ${blog.blog}</p>
    <div class="meer" >
    <a>Meer  </a>
    <img src='https://pknar.github.io/SKW//assets/icons/arrows/dark-arrow.png' />
    </div>
       </div>`;

      blogList.innerHTML += html;
    });
  }

  generateBlog();
})();
