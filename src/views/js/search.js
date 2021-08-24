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




// UPDATE 
const updateBtn = document.getElementById("data-update");

const handleUpdateBox = () => {
    const updateTarget = document.querySelectorAll(".data")
    updateTarget.forEach(item => {
        console.log(item)
        if (item.children[0].children[0].checked) {
            // const inCode = document.createElement('tr');
            // item.append(inCode);
            const temp1 = item.children[1].innerText;
            const temp2 = item.children[2].innerText;
            const temp3 = item.children[3].innerText;
            const temp4 = item.children[4].innerText;
            const temp5 = item.children[5].innerText;

            console.log(typeof temp1)
            console.log(temp1)

            item.children[1].innerHTML = `<input name="number", placeholder="${temp1}", required, type="text">`
            item.children[2].innerHTML = `<input name="i_number", placeholder="${temp2}", required, type="text">`
            item.children[3].innerHTML = `<input name="car_name", placeholder="${temp3}", required, type="text">`
            item.children[4].innerHTML = `<input name="owner", placeholder="${temp4}", type="text">`
            item.children[5].innerHTML = `<input name="phone", placeholder="${temp5}", type="text">`
        }
    });

    // console.log(updateTarget)
}

updateBtn.addEventListener("click", handleUpdateBox)






// DELETE

// const deleteBtn = document.getElementById("data-delete");

// const handleDelete = () => {
//     const check = document.querySelectorAll("input[name=target]:checked");
//     check.forEach((checkCar) => {
//     })
// }
// deleteBtn.addEventListener("click", handleDelete)


// CHECK BOX
const checkAll = document.getElementById("checkAll");

checkAll.addEventListener("click", function () {
    const check = document.querySelectorAll("input[name=target]");
    check.forEach((checkCar) => {
        checkCar.checked = checkAll.checked;
    })
})

