const today = new Date();
const time = document.getElementById('time').children;


function getDate() {
    let year = today.getFullYear(); // 년도
    let month = String(today.getMonth() + 1).padStart(2, "0");  // 월
    let date = String(today.getDate()).padStart(2, "0");  // 날짜
    // let day = String(today.getDay()).padStart(2, "0");  // 요일
    time[0].innerText = `${year}-${month}-${date}`;
    
    let amPm;
    let hours = today.getHours(); //
    if (hours <= 12) {
        amPm = 'A.M';
        hours = String(hours+12).padStart(2, "0"); 
    } else {
        amPm = 'P.M';
        hours = String(hours-12).padStart(2, "0"); 
    }
    let minutes = String(today.getMinutes()).padStart(2, "0");  // 분
    time[1].children[0].innerText = `${amPm}`;
    time[1].children[1].innerText =  `${hours}:${minutes}`;

}



getDate();
setInterval(getDate, 1000);