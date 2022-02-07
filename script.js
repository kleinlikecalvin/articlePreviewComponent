const button = document.getElementById("shareBtn");
const footer = document.getElementById("footer");
const tippyShareContent = document.getElementById("tippyShareContent");

if (window.innerWidth >= 838) {
  tippyShareContent.style.display = "flex";

  tippy(button, {
    trigger: "click",
    theme: "custom",
    allowHTML: true,
    interactive: true,
    content: tippyShareContent,
  }); //end tippy()
} else {
  button.addEventListener("click", () => {
    if (footer.classList.length == 1) {
      footer.classList = "flex shareMode";
    } else {
      footer.classList = "flex";
    }
  });
}

//while window width is < 838 px change footer to share mode
