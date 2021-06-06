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
    <h4>${blog.title}</h4>
    <p class="blog-preview"> ${blog.blog}</p>
    <div class="meer" >
    <a>Meer <img src="assets/icons/arrows/dark-arrow.png" />  </a>
    </div>
       </div>`;

      blogList.innerHTML += html;
    });
  }

  generateBlog();
})();
