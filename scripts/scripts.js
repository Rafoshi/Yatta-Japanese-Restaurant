// Menu hamburger
let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

const home = document.querySelector(".home")
const menu = document.querySelector(".menu")
const deposition = document.querySelector(".deposition")
const about = document.querySelector(".about-nav")

about.addEventListener("click", () => {

  document.body.style.overflow = "initial"

  menuSection.classList.toggle("on", show)
  show = !show;
})

deposition.addEventListener("click", () => {

  document.body.style.overflow = "initial"

  menuSection.classList.toggle("on", show)
  show = !show;
})

home.addEventListener("click", () => {

  document.body.style.overflow = "initial"

  menuSection.classList.toggle("on", show)
  show = !show;
})

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})
