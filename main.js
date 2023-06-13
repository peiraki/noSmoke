let realTime =  new Date();
let startTime = new Date('2023-06-01');
let difference = realTime.getTime() - startTime.getTime();

let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    daysCountNoSmoke.innerText =  "I haven't smoked for " + TotalDays + " days";
    // console.log(realTime,startTime,TotalDays)
let day = realTime.getDate();
let daysCount = 365;
for (let days = 1; days <= daysCount; days++) {
   if(days <= TotalDays){
    NoSmokeList.innerHTML += `
        <li onclick="makeBgColor(this)">${days} Day<span> ✅</span></li>
    `
   }else  {
        NoSmokeList.innerHTML += `
        <li onclick="makeBgColor(this)">${days} Day<span> ⏳</span></li>
    `
   }
}



function submitDate() {
    if(dateOfCustomer.value){
        let newDate = dateOfCustomer.value
            // console.log(newDate)
            newDate = newDate.split("-").reverse().join("-");
            // console.log(newDate)
            startTimeText.innerText = "(startTime: "+ newDate +")" 
            // console.log("well done",dateOfCustomer.value)
            startTime = new Date(dateOfCustomer.value)
            // console.log(startTime)
            NoSmokeList.innerHTML = "";
            difference = realTime.getTime() - startTime.getTime();
            TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
            daysCountNoSmoke.innerText =  "You haven't smoked for " + TotalDays + " days";
            for (let days = 1; days <= daysCount; days++) {
                if(days <= TotalDays){
                    NoSmokeList.innerHTML += `
                        <li>${days} Day<span> ✅</span></li>
                    `
                }else  {
                        NoSmokeList.innerHTML += `
                        <li>${days} Day<span> ⏳</span></li>
                    `
                }
                if(TotalDays > 29){
                    congrulation1.innerText = "Congratulations, you have overcome a difficult time 🎉";
                }
            }
            if(TotalDays > 21){
                congrulation1.innerText = "Congratulations, you have overcome a difficult time 🎉";
            }else {
                congrulation1.innerText = "";
            }
    }
}








// let startTimeNoDrinking = new Date('04.18.2023');
// let differenceDrinking = realTime.getTime() - startTimeNoDrinking.getTime();

// let TotalDaysNoDrinking = Math.ceil(differenceDrinking / (1000 * 3600 * 24));
//     daysCountNoDrink.innerText =  "I haven't Drunk for " + TotalDaysNoDrinking + " days";
// let dayNoDrink = realTime.getDate();
// for (let days = 1; days < 366; days++) {
//    if(days < TotalDaysNoDrinking){
//         NoDrinkList.innerHTML += `
//         <li>${days} Day<span> ✅</span></li>
//     `
//    }else {
//         NoDrinkList.innerHTML += `
//         <li>${days} Day<span> ⏳</span></li>
//     `
//    }
//    if(TotalDaysNoDrinking > 29){
//     congrulation2.innerText = "Congratulations, you have overcome a difficult time 🎉";
//    }
// }
function makeBgColor(li) {
    li.classList.toggle('none')
}


       spanArrows.addEventListener('click', ()=> {
            NoSmokeList.classList.toggle('grid-to-two')               

       })


    for (let reason = 1; reason <= 50; reason++) {
        reasonsList.innerHTML += `<li> ${reason} </li>`      
    }
    // for (let reason = 26; reason <= 50; reason++) {
    //     reasonsList2.innerHTML += `<li> ${reason} </li>`      
    // }

    