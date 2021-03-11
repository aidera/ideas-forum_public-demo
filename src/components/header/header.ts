const body: HTMLBodyElement = document.querySelector("body");
const bodyOverlayPresets = body.style.overflow;

const headerImage: HTMLDivElement = document.querySelector("#header .image");
if (headerImage) {
  headerImage.style.top = `${window.scrollY * 0.3}px`;
  window.addEventListener("scroll", (event) => {
    headerImage.style.top = `${window.scrollY * 0.3}px`;
  });
}

const menuPopup: HTMLDivElement = document.querySelector("#menu-popup");
const menuPopupClose: NodeListOf<HTMLDivElement> = document.querySelectorAll(
  ".menu-popup-close"
);
const menuPopupOpen: NodeListOf<HTMLDivElement> = document.querySelectorAll(
  ".menu-popup-open"
);

if (menuPopup && menuPopupOpen) {
  menuPopupOpen.forEach((el) => {
    el.addEventListener("click", () => {
      menuPopup.style.display = "block";
      body.style.overflow = "hidden";
    });
  });
}
if (menuPopup && menuPopupClose) {
  menuPopupClose.forEach((el) => {
    el.addEventListener("click", () => {
      menuPopup.style.display = "none";
      body.style.overflow = bodyOverlayPresets;
    });
  });
}

function menuLinksPopovers() {
  const menuLinks = document.querySelectorAll(".main-part__menu .link-group");
  if (menuLinks) {
    menuLinks.forEach((link) => {
      const headerLink = link.querySelector("a") as HTMLElement;
      const tooltipContainer = link.querySelector(".list-container") as HTMLElement;
      const tooltip = link.querySelector(".list") as HTMLElement;
      if (tooltip) {
        headerLink.addEventListener("mouseover", () => {
          tooltip.classList.add("is-open");

          const windowWidth = document.documentElement.clientWidth;
          const distance = tooltip.getBoundingClientRect();
          tooltipContainer.classList.remove("right");
          tooltip.classList.remove("right");
          if (distance.right >= windowWidth) {
            tooltip.classList.add("right");
            tooltipContainer.classList.add("right");
          }
        });
        link.addEventListener("mouseleave", () => {
          tooltip.classList.remove("is-open");
          tooltip.classList.remove("right");
          tooltipContainer.classList.remove("right");
        });
      }
    });
  }
}
menuLinksPopovers();
window.addEventListener("resize", menuLinksPopovers);
