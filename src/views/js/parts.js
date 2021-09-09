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
    // e.preventDefault();
    if (e.target !== e.currentTarget) {
        if (e.target.dataset.btn === "+" || e.target.dataset.btn === "-"){
            check = window.confirm("재고 수량을 변경하시겠습니까?");
            // console.log(check)

            if (check === true) {
                if (e.target.toString() === "[object HTMLElement]"){
                    const partNum = e.target.parentNode.parentNode.parentNode.querySelector("td:nth-child(5)")
                    // console.log(partNum);
                    const innerNum = parseInt(partNum.innerHTML);
                    if (e.target.dataset.btn === "+") {
                        partNum.innerHTML = innerNum+1;
                    } else if (e.target.dataset.btn === "-") {
                        partNum.innerHTML = innerNum-1;
                    }
                } else{
                    const partNum = e.target.parentNode.parentNode.querySelector("td:nth-child(5)")
                    // console.log(partNum)
                    const innerNum = parseInt(partNum.innerHTML);
                    if (e.target.dataset.btn === "+") {
                        partNum.innerHTML = innerNum+1;
                    } else if (e.target.dataset.btn === "-") {
                        partNum.innerHTML = innerNum-1;
                    }
                }
    
                const targetId = e.target.dataset.id;
                const targetData = e.target.dataset.btn;
                // console.log(targetId)
                const response = await fetch(`/parts/${targetId}/change`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ targetData }),
                });
                console.log(response.status);
            }

        } 
    }
}

table.addEventListener("click", PartChange);