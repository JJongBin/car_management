const searchBtn = document.getElementById("data-add");
const addBox = document.getElementById("data-add-section");
const closeBtn = document.getElementById("add-close-btn");

const handleAddBox = () => {
    addBox.classList.remove("hide");
    closeBtn.addEventListener("click", handleCloseBox)
}

const handleCloseBox = () => {
    addBox.classList.add("hide");
    closeBtn.removeEventListener("click", handleCloseBox)
}

searchBtn.addEventListener("click", handleAddBox)
