let imgs = document.querySelectorAll(".questionwrapper  img");

function openParentDIv(e) {
  let parent = e.target.parentNode.parentNode;
  parent.classList.toggle("openAnswer");
}

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    img.classList.toggle("rotate");
    openParentDIv(e);
  });
});
