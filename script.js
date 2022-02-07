const button = document.getElementById("shareBtn");
const tippyShareContent = document.getElementById("tippyShareContent");

//while window width is >= 838 px use Tippy
tippy(button, {
  trigger: "click",
  content: tippyShareContent.textContent,
}); //end tippy()

//while window width is < 838 px change footer to share mode
