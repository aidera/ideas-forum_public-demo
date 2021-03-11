
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider"


const indexHeaderDecor1: HTMLDivElement = document.querySelector("#index-header > .decor1");
if(indexHeaderDecor1) {
  indexHeaderDecor1.style.left = `-${window.scrollY * 0.05}px`;
  window.addEventListener("scroll", (event) => {
    indexHeaderDecor1.style.left = `-${window.scrollY * 0.05}px`;
  });
}

const indexHeaderDecor2: HTMLDivElement = document.querySelector("#index-header > .decor2");
if(indexHeaderDecor2) {
  indexHeaderDecor2.style.right = `-${window.scrollY * 0.1}px`;
  window.addEventListener("scroll", (event) => {
    indexHeaderDecor2.style.right = `-${window.scrollY * 0.1}px`;
  });
}

const indexSlider: HTMLDivElement = document.querySelector("#index-slider");

if(indexSlider) {
  const slider = tns({
    container: "#index-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsText: ["<img src='/images/prev-button.svg' alt='prev slide' />", "<img src='/images/next-button.svg' alt='next slide' />"],
    autoplayText: ["", ""],
  });
}

const indexQuotesSlider: HTMLDivElement = document.querySelector("#index-quotes-slider");

if(indexQuotesSlider) {
  const quotesSlider = tns({
    container: "#index-quotes-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    controlsText: ["<img src='/images/prev-button.svg' alt='prev slide' />", "<img src='/images/next-button.svg' alt='next slide' />"],
    autoplayText: ["", ""],
  });
}
