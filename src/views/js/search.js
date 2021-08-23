// ADD
const searchBtn = document.getElementById("data-add");
const addBox = document.getElementById("data-add-section");
const closeBtn = document.getElementById("add-close-btn");

const handleAddBox = () => {
    addBox.classList.remove("hide");
    closeBtn.addEventListener("click", handleCloseBox)
    searchBtn.classList.add("hide");
}

const handleCloseBox = () => {
    searchBtn.classList.remove("hide");
    addBox.classList.add("hide");
    closeBtn.removeEventListener("click", handleCloseBox)
}

searchBtn.addEventListener("click", handleAddBox)





// DELETE

const deleteBtn = document.getElementById("data-delete");

const handleDelete = () => {
    const check = document.querySelectorAll("input[name=target]:checked");
    console.log(check)
    check.forEach((checkCar) => {
        console.log(checkCar.value);
    })
}
deleteBtn.addEventListener("click", handleDelete)

