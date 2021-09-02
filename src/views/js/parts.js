const addPartBtn = document.querySelector(".openDataBtn");

const search = document.querySelector(".data-search");
const addPart = document.querySelector(".data-addBox");
const close = document.querySelector(".close");


const handleaddPartBtn = () => {
    addPartBtn.classList.add("hide");
    search.classList.add("hide");
    addPart.classList.remove("hide");

    close.addEventListener("click", function() {
        addPartBtn.classList.remove("hide");
        search.classList.remove("hide");
        addPart.classList.add("hide");
    })
}

addPartBtn.addEventListener("click", handleaddPartBtn)