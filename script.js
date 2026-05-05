let viewWorkBtn = document.querySelector(".hero-btn")

viewWorkBtn.addEventListener("click", function(){
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    })
})