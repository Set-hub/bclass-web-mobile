console.log('Hello World!');
let menuIcon = document.getElementById("menuIcon");
let mobileMenu = document.querySelector(".mobileMenu");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("top-[40px]","scale-y-100");
  
  console.log("click");
})

exitBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("top-[40px]","scale-y-100");
})