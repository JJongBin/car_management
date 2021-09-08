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





// 재고 증감
const table = document.querySelector("table");


const PartChange = async(e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
        if (e.target.dataset.btn === "+"){
            const targetId = e.target.dataset.id;
            const targetData = e.target.dataset.btn;
            console.log(targetId)
            console.log("data plus")
            const response = await fetch(`/parts/${targetId}/change`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ targetData }),
            });


        } else if (e.target.dataset.btn === "-"){
            console.log("data minus")
        }
    }
}


table.addEventListener("click", PartChange)