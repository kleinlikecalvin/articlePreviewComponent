## Table of contents

- [What I Learned](#what-i-learned)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## What I learned

- How to make my own utility classes and learned the value of them.
- How to use .classList
- Learned about window.innerWidth
- Learned to use Tippy with a custom configuration

## Overview

This is a beginner challenge by FrontEndMentor.io [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT)

I used HTML, CSS, JS, and Tippy.js to complete it. There are a few new tools I learned, I detailed them below!

### The challenge

Users should be able to:

- Responsive Design
- Toggle share icons

### Links

- Solution URL: [FrontEndMentor](https://your-solution-url.com)
- Live Site URL: [GitHub](https://kleinlikecalvin.github.io/articlePreviewComponent/)

## My process

- Create HTML file (ex: index.html)
- Create an external CSS file (ex: styles.css)
- Create an external JS file (ex: script.js)
- In the head: link the font used (Manrope) from Google Fonts and link the external CSS file.
- Create the component skeleton (HTML)
- Before the closing <code>body</code> tag: link Tippy.js and the external JS file
- Style each element to match the design (CSS)
- If the window is over a certain size, use the Tippy otherwise style the footer to match the design (JS)
- Nailed it!

### Built with

- HTML
- CSS
- Flex
- Desktop to mobile workflow
- [Tippy.js](https://atomiks.github.io/tippyjs/) - Tippy component
- [Google Fonts](https://fonts.google.com/) - Fonts

### What I learned

At the time of building this component, I'm also working through Kent C. Dodds EpicReact course. I think that what I'm learning from Kent mixed with my previous knowledge of Bootstrap inspired me to consider how many times I've been repeating <code>display: flex</code> and <code>flex-direction: column</code>. So, in this challenge I decided to save those properties into CSS class rules that I can add to any element as I write. I know that <code>flex</code> defaults to row so I didn't feel it was necessary to create a <code>.flex</code>, <code>.row</code>, AND <code>.col</code> rule.

```css
.flex {
  display: flex;
}
.col {
  flex-direction: column;
}
```

I had a hell of a time figuring out how to style the svg arrow I used in the footer button. Eventually, I think I landed on some sort of hacky solution so I'd appreciate any feedback.

```css
footer #shareBtn svg {
  background-color: var(--lightGreyishBlue);
  border-radius: 50%;
  fill: var(--desaturatedBlue);
  padding: 11px 10px;
  transition: 0.3s;
}
```

The bulk of what I learned from completing this challenge came from my JS. Up until this point I've never manipulated/utilized the window, never used Tippy.js, and never used <code>.classList</code>. So, it was SUPER rad that I got to learn about all three of these powerful tools. I used <code>window.innerWidth</code> to set the function of <code>#shareBtn</code> depending on the size of the window. Then I customized the Tippy constructor to my needs for the challenge. Lastly, I used <code>.classList</code> to add and remove the <code>.shareMode</code> CSS rule I created. This was a pretty awesome challenge.

```js
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
    footer.classList.toggle("shareMode");
  });
}
```

### Continued development

I read/hear a lot about mobile-first development but every time I try I always end up with a mess that needs a ton of revamping to make the desktop view appear correctly. Though, I have a pretty easy time writing desktop to mobile, I would like to continue practicing mobile to desktop.

### Useful resources

- [Tippy.js](https://atomiks.github.io/tippyjs/) - Tippy made it so easy to CDN the package and customize the Tippy constructor to my needs.
- [Window.innerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth) - I haven't utilized the window very much up until this point in my coding. So, it was fun to learn about innerWidth which I used to distinguish which event should occur with the footer.
- [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) - Using <code>.classList</code> is awesome! It reminds me a bit of jQuery.

## Author

- Website - [Nikki Klein](https://www.kleinlikecalvin.com)
- Frontend Mentor - [@kleinLikeCalvin](https://www.frontendmentor.io/profile/kleinlikecalvin)
- Twitter - [@kleinLikeCalvin](https://www.twitter.com/kleinlikecalvin)

## Acknowledgments

I want to thank the people behind Tippy.js/Popper, the docs were clear and utilizing their code made this challenge way less intricate. I would also like to thank my mentor, Nathaniel Walston, for helping me realize that it's pretty pointless to focus on the transition between desktop and mobile view. Because pretty much nobody ever will go from using one to the other on the same device.
