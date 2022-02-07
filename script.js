const button = document.getElementById("shareBtn");
const footer = document.getElementById("footer");
const tippyShareContent = document.getElementById("tippyShareContent");
tippyShareContent.style.display = "flex";

if (window.innerWidth >= 838) {
  tippy(button, {
    trigger: "click",
    theme: "custom",
    allowHTML: true,
    interactive: true,
    content: tippyShareContent,
  }); //end tippy()
} else {
}

//while window width is < 838 px change footer to share mode
