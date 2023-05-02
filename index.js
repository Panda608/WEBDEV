const navButton = document.getElementById("main-navbar-button");
const navUL = document.getElementById("main-navbar-ul")
navButton.addEventListener("click", () => {    


    const navButton = document.getElementById("main-navbar-button");
    const navUL = document.getElementById("main-navbar-ul");
    
    navButton.addEventListener("click", () => {
        navUL.classList.toggle("ul-visible");
        navUL.classList.toggle("ul-hidden");
    
        navButton.classList.toggle("open");
    }
    );

    
}
