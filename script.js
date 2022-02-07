const button = document.getElementById("shareBtn");
const tippyShareContent = document.getElementById("tippyShareContent");
tippyShareContent.style.display = "flex";

//while window width is >= 838 px use Tippy
tippy(button, {
  trigger: "click",
  theme: "custom",
  allowHTML: true,
  interactive: true,
  content: tippyShareContent,
}); //end tippy()

//while window width is < 838 px change footer to share mode
