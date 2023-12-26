
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    const accordionButton = accordion.querySelector(".accordionButton");
   
    accordionButton.addEventListener("click", () => {
        accordionButton.querySelector(".plusIcon").classList.toggle("active");
        accordionButton.querySelector(".minusIcon").classList.toggle("active");
        accordion.querySelector(".accordionContent").classList.toggle("active");
    })
})