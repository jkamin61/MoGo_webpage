const menuIcon = document.querySelector("#menu");
const mobileMenu = document.querySelector(".header__navigation");
const closeMenu = document.querySelector(".header__close-menu");
const socialIcons = document.querySelectorAll(".team__social");
console.log(socialIcons);
menuIcon.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("hidden");
  socialIcons.forEach((icon) => {
    icon.style.display = "none";
  });
});
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  socialIcons.forEach((icon) => {
    icon.style.display = "flex";
  });
});
