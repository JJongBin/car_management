let date = new Date()     // 객체 생성
let year = date.getFullYear()
let month = date.getMonth() + 1   // 달은 0부터 시작(0 = 1월)
let day = date.getDate()
let dayOfWeek = date.getDay()



// 달
const monthItem = document.querySelector("article .section-1 .calender .calender-month .control-month .month")


function getMonthItem(year, month) {
    // year = date.getFullYear()
    // month = date.getMonth() + 1;
    monthItem.innerText = `${year}.${String(month).padStart(2, "0")}`   // 상단에 년 월 표시
}
getMonthItem(year, month);
setInterval(function() {getMonthItem(month)}, 3600000);     // 하루 기준으로 갱신



// 일자 띄우기
function getDateItem(year, month) {
    // console.log(month)
    
    const prevLast = new Date(year, month-1, 0);    // 지난달 
    const thisLast = new Date(year, month, 0);      // 이번달
    
    const prevLastDate = prevLast.getDate();        // 지난달 마지막 일자
    const prevLastDay = prevLast.getDay();          // 지난달 마지막 요일
    
    const thisLastDate = thisLast.getDate();        // 이번달 마지막 일자
    const thisLastDay = thisLast.getDay();          // 이번달 마지막 요일
    
    
    // console.log("")
    // console.log(prevLastDate)
    // console.log(prevLastDay)
    // console.log(thisLastDate)
    // console.log(thisLastDay)
    
    
    const prevDates = [];       // 달력에 표시할 지난달 마지막 부분
    const thisDates = [...Array(thisLastDate + 1).keys()].slice(1); // ES6부터 가능함! (1부터 n까지의 배열)
    const nextDates = [];       // 달력에 표시할 다음달 첫 부분
    
    // console.log("")
    // console.log(thisDates)
    // console.log(nextDates)
    
    
    if (prevLastDay !== 6) {        // 지난달의 마지막일자가 토요일이면 표시하지 않아야함
        for (let i = 0; i < prevLastDay + 1; i++) {
          prevDates.unshift(prevLastDate - i);      // 큰 수부터 배열에 삽입 / 앞에다 추가됨(unshift)  
        }
    }
    for (let i = 1; i < 7 - thisLastDay; i++) {     
        nextDates.push(i);
    }
    
    
    // 현재 날짜
    todayYear = String(date.getFullYear())
    todayMonth = String(date.getMonth() + 1).padStart(2, "0")  
    day = date.getDate()
    const nowMonth = todayYear + "." + todayMonth
    const calenderMonth = monthItem.textContent
    // console.log(nowMonth)
    // console.log(calenderMonth)

    // foreach(function (callback, index, array) {내용})    인자로 배열의 요소, 인덱스, 배열이 들어갈 수 있음        
    // foreach((callback, index, array) => {내용})          화살표함수도 가능
    
    prevDates.forEach(function (date, i) {
        prevDates[i] = `<div class="date show other"><p>${date}</p></div>`;
    })
    thisDates.forEach(function (date, i) {
        if (day === date && nowMonth === calenderMonth){    // 일자가 같고 오늘의 년월이 화면의 년월과 같을때
            thisDates[i] = `<div class="date show today"><p>${date}</p></div>`;
        }else{
            thisDates[i] = `<div class="date show"><p>${date}</p></div>`;
        }
    })
    nextDates.forEach(function (date, i) {
        nextDates[i] = `<div class="date show other"><p>${date}</p></div>`;
    })
    const dates = prevDates.concat(thisDates, nextDates);       // concat으로 배열을 합침
    
    document.querySelector('.dates').innerHTML = dates.join('');    // join을 이용해서 전체 삽입


    
    
}

getDateItem(year, month)
setInterval(getDateItem, 3600000)


const prevMonth = document.querySelector("article .section-1 .calender .calender-month .control-month .prev")
const nextMonth = document.querySelector("article .section-1 .calender .calender-month .control-month .next")

prevMonth.addEventListener("click", function() {
    month -= 1;
    if (month <= 0){
        month = 12;
        year -= 1;
    }
    getMonthItem(year, month);
    getDateItem(year, month);
})
nextMonth.addEventListener("click", function() {
    month += 1
    if (month >= 13){
        month = 1;
        year += 1;
    }
    getMonthItem(year, month);
    getDateItem(year, month);
})





// DETAILS

const handleDetail = (event) => {
    console.log(event.target.innerText);
    if(!click_event.classList.contains("click-detail")){
        click_event.classList.add("click-detail")
    } else {
        click_event.classList.remove("click-detail")
    }
    if(show_detail.classList.contains("hide")){
        show_detail.classList.remove("hide")
    } else {
        show_detail.classList.add("hide")
    }
}

const dates_click = document.querySelector(".dates");
const show_detail = document.querySelector(".details");
const click_event = document.getElementById("calender-event");

dates_click.addEventListener("click", handleDetail);


// DETAILS CLOSE
const detailsClose = document.querySelector(".detailsClose");
detailsClose.addEventListener("click", handleDetail)

