const time = document.querySelector("#time");
const main = document.querySelector("#main");
const boxDate = document.querySelector("#arrivalDate");
const banner = document.querySelector("#banner");
const iconClock = document.querySelector("#iconClock");
const iconMenu = document.querySelector("#iconMenu");
const iconMenu1 = document.querySelectorAll(".iconMenu");
const bor = document.querySelector(".bor");
const navMenu = document.querySelector("#navMenu");
const bor1 = document.querySelector("#bor1");
const bor2 = document.querySelector("#bor2");
const bor3 = document.querySelector("#bor3");
const tri = document.querySelector(".triangle");
const tri1 = document.querySelector(".triangle1");
const txtMenu = document.querySelectorAll(".txtMenu");
const btnSmall = document.querySelector("#small");
const shams = document.querySelector("#shams");
const toggle = document.querySelector("#toggle");
const txtShams = document.querySelector("#txtShams");
const alertMessage = document.querySelector("#alertMessage");

const selectDay = document.querySelector("#selectDay");
const selectMonth = document.querySelector("#selectMonth");
const selectYear = document.querySelector("#selectYear");

const selectHours = document.querySelector("#hours");
const selectMinutes = document.querySelector("#minutes");

const ok = document.querySelector("#ok");
const btnDate = document.querySelector("#btnDate");
const btnClose = document.querySelector("#close");

const date = new Date();
const monthArr=[1,-2,1,0,1,0,1,1,0,1,0,1];
const monthArrSh=[1,1,1,1,1,1,0,0,0,0,0,-1];
const threeArr=[4,6,9,11];
const nowYear = date.getFullYear();
const nowMonth = date.getMonth()+1;
const nowDay = date.getDate();

const nowHours = date.getHours();
const nowMinutes = date.getMinutes();
const nowSeconds = date.getSeconds();

const pTag = document.createElement("p");
pTag.id="clock";

let dayLeft=0;
let secondLeft=nowSeconds;
let secondPlus=nowSeconds;
let minutesLeft=0;
let minutesPlus= nowMinutes;
let hoursLeft=0;
let hoursPlus=nowHours;
let targetDate=[nowDay,nowMonth,nowYear];
let targetTime=[nowHours,nowMinutes,nowSeconds];
let decSecond;

let watch;
let watch2;
let nowClock = clock([nowDay,nowMonth,nowYear],time,"0.8pt");
let valid=false;
let valid2=false;
let valid3=true;
let valid4=false;
let valid5=false;
let showMenu=false;
let smallMenuPo=false;
let btnShams=false;
let setOk=false;

const heightHeader = 112;
banner.style.height=`${heightHeader}px`;
let heightMenu = window.innerHeight - heightHeader;
navMenu.style.height=`${heightMenu}px`;

iconClock.style.display="none";
iconClock.addEventListener("click",()=>{
    
        iconClock.style.display="none";
        pTag.style.display="block";
        for(let i=0;i<=34;i+=0.001){
            setTimeout(()=>{
                pTag.style.transform=`translateY(${i}pt)`;
            },1);
        }
        setTimeout(()=>{
            for(let i=34;i>=0;i-=0.001){
                setTimeout(()=>{
                    pTag.style.transform=`translateY(${i}pt)`;
                },1);
            };
            console.log("object");
            iconClock.style.opacity="1";
            iconClock.style.display="block";
            setTimeout(()=>{
                iconClock.style.opacity="0.4";
            },1700);
        },6000);
});
ok.addEventListener("click",()=>{
    
    setOk = true;

    if(btnShams===true){
        let tempDate=[nowDay,nowMonth,nowYear];
        tempDate= convertDateToSh(tempDate);
        const nowDaySh=tempDate[0];
        const nowMonthSh=tempDate[1];
        const nowYearSh=tempDate[2];

        let shamsDay=parseInt(selectDay.value);
        console.log(shamsDay);
        if(parseInt(selectDay.value)===31){
            for(let i=0;i<monthArrSh.length;i++){
                console.log(parseInt(selectMonth.value-1));
                if(monthArrSh[parseInt(selectMonth.value-1)]===0){
                    alertMessagesFunction("این ماه سی روز دارد",selectDay);
                    valid5=false;
                    break;
                }else{
                    valid5=true;
                }
            }
        }else if(parseInt(selectMonth.value)===12){
            if(parseInt(selectDay.value)>29){
                alertMessagesFunction("این ماه 29 روز دارد",selectDay);
                valid5=false;
            }else {valid5=true}
        }else{valid5=true};

        if( nowYearSh > parseInt(selectYear.value)){
            alertMessagesFunction("سال نمی تواند کوچکتر از سال جاری باشد",selectYear);
            valid4=false;
        }else if (nowYearSh === parseInt(selectYear.value) && nowMonthSh > parseInt(selectMonth.value)){
            alertMessagesFunction("ماه نمیتواند کوچکتر از ماه جاری باشد",selectMonth);
            valid4=false;
        }else if (nowYearSh === parseInt(selectYear.value) && nowMonthSh === parseInt(selectMonth.value) && nowDaySh > parseInt(selectDay.value)){
            alertMessagesFunction("روز نمیتواند کوچکتر از روز جاری باشد",selectDay);
            valid4=false;
        }else if (nowYearSh === parseInt(selectYear.value) && nowMonthSh === parseInt(selectMonth.value) && nowDaySh === parseInt(selectDay.value) && nowHours > parseInt(selectHours.value)){
            alertMessagesFunction("ساعت نمیتواند کوچکتر از ساعت جاری باشد",selectHours);
            valid4=false;
        }else if (nowYearSh === parseInt(selectYear.value) && nowMonthSh === parseInt(selectMonth.value) && nowDaySh === parseInt(selectDay.value) && nowHours === parseInt(selectHours.value) && nowMinutes > parseInt(selectMinutes.value)){
            alertMessagesFunction("دقیقه نمیتواند کوچکتر از دقیقه جاری باشد",selectMinutes);
            valid4=false;
        }else{valid4=true}
        //************************************************************************************************/
        if(valid4===true && valid5===true){
            const shamsArray = convertDateToMi([parseInt(selectDay.value),parseInt(selectMonth.value),parseInt(selectYear.value)]);
            selectYear.value=shamsArray[2].toString();
            selectMonth.value=shamsArray[1].toString();
            selectDay.value=shamsArray[0].toString();
        }
        
    }
    
    

    if(btnShams===false){
        console.log("shams false");
        if(parseInt(selectDay.value)===31 && parseInt(selectMonth.value)!=2){
            for(let i=0;i<threeArr.length;i++){
                if(parseInt(selectMonth.value)===threeArr[i]){
                    alertMessagesFunction("این ماه سی روز دارد",selectDay);
                    valid3=false;
                    break;
                }else{
                    valid3=true;
                }
            }
        }else if(parseInt(selectMonth.value)===2){
            if(parseInt(selectDay.value)>28){
                alertMessagesFunction("این ماه 28 روز دارد",selectDay);
                valid3=false;
            }else {valid3=true}
        }else(valid3=true);

        if( nowYear > parseInt(selectYear.value) && btnShams===false){
            alertMessagesFunction("سال نمی تواند کوچکتر از سال جاری باشد",selectYear);
            valid4=false;
        }else if (nowYear === parseInt(selectYear.value) && nowMonth > parseInt(selectMonth.value)){
            alertMessagesFunction("ماه نمیتواند کوچکتر از ماه جاری باشد",selectMonth);
            valid4=false;
        }else if (nowYear === parseInt(selectYear.value) && nowMonth === parseInt(selectMonth.value) && nowDay > parseInt(selectDay.value)){
            alertMessagesFunction("روز نمیتواند کوچکتر از روز جاری باشد",selectDay);
            valid4=false;
        }else if (nowYear === parseInt(selectYear.value) && nowMonth === parseInt(selectMonth.value) && nowDay === parseInt(selectDay.value) && nowHours > parseInt(selectHours.value)){
            alertMessagesFunction("ساعت نمیتواند کوچکتر از ساعت جاری باشد",selectHours);
            valid4=false;
        }else if (nowYear === parseInt(selectYear.value) && nowMonth === parseInt(selectMonth.value) && nowDay === parseInt(selectDay.value) && nowHours === parseInt(selectHours.value) && nowMinutes > parseInt(selectMinutes.value)){
            alertMessagesFunction("دقیقه نمیتواند کوچکتر از دقیقه جاری باشد",selectMinutes);
            valid4=false;
        }else{valid4=true}
    }
    
    Validation(selectYear);
    Validation(selectHours);
    Validation(selectMinutes);

    if(parseInt(selectHours.value)>23 || parseInt(selectHours.value)<0){
        alertMessagesFunction("ساعت باید بین عدد 0 تا 23 باشد",selectHours);
        valid2=false;
    }else if(parseInt(selectMinutes.value)>59 || parseInt(selectMinutes.value)<0){
        alertMessagesFunction("دقیقه باید بین عدد 0 تا 59 باشد",selectMinutes);
        valid2=false;
    
    }else {valid2=true}
  
    //*************************************************************************************
    

    if(valid===true && valid2===true && valid3===true && valid4===true && valid5===true){
        clearInterval(watch);
        clearInterval(watch2);
        clearInterval(decSecond);
        time.style.webkitTextStroke=" 0.8pt rgb(155, 0, 0)";
        iconClock.style.display="block";
        setTimeout(()=>{
            iconClock.style.opacity="0.4";
        },1000);

        watch2 = clock([nowDay,nowMonth,nowYear],pTag,"0.4pt");
        main.appendChild(pTag);
        if(btnShams===true){
            const tempDate=[nowDay,nowMonth,nowYear];
            clock(convertDateToSh(tempDate),pTag,"0.4pt");
        }

        const tDay = selectDay.value;
        const tMonth = selectMonth.value;
        const tYear = selectYear.value;
        const tHours =parseInt(selectHours.value);
        const tMinutes =parseInt(selectMinutes.value);
        targetDate = [tDay,tMonth,tYear];
        targetTime = [tHours,tMinutes,secondLeft];
        timeLeft(targetDate);
        timer(); 
        setTimeout(()=>{
            let opacity = 0.5;
            for(let i=0;i<=5000;i++){
                setTimeout(()=>{
                    opacity=opacity-0.0001;
                    boxDate.style.opacity=opacity.toString();
                },2);
            }
            setTimeout(()=>{
                boxDate.style.display="none";
            },300);
        },500);
    }
});
btnDate.addEventListener("click",()=>{
    boxDate.style.display="block";
    let opacity = 0;
    for(let i=0;i<=5000;i++){
        setTimeout(()=>{
            opacity=opacity+0.0001;
            boxDate.style.opacity=opacity.toString();
        },2);
    }
});
btnClose.addEventListener("click",()=>{
    let opacity = 0.5;
    for(let i=0;i<=5000;i++){
        setTimeout(()=>{
            opacity=opacity-0.0001;
            boxDate.style.opacity=opacity.toString();
        },2);
    }
    setTimeout(()=>{
        boxDate.style.display="none";
    },300);
});
iconMenu.addEventListener("click",()=>{
    navMenu.classList.remove("moveMenu");
    tri.classList.remove("moveMenu");
    if(showMenu===false){
        navMenu.style.display="block";
        let opacity = 0;
        let opacity1 = 1;
        let moveY = 0;
        let sclX = 0;
       let op= setInterval(() => {
            opacity=opacity+0.02;
            navMenu.style.opacity=opacity.toString();
            if(opacity>0.99){
                clearInterval(op);
            }
        }, 15);
        //--------------------------------------------
        let op1 = setInterval(() => {
            moveY = moveY+1;
            bor3.style.transform=`translateY(${moveY.toString()}px)`;
            opacity1=opacity1-0.02;
            bor3.style.opacity=`${opacity1.toString()}`;
            if(moveY>36){
                clearInterval(op1);
                bor3.style.opacity=`0`;
            }
        }, 12);
        let op2 = setInterval(() => {
            moveY = moveY+1;
            bor2.style.transform=`translateY(${moveY.toString()}px)`;
            opacity1=opacity1-0.02;
            bor2.style.opacity=`${opacity1.toString()}`;
            if(moveY>48){
                clearInterval(op2);
                bor2.style.opacity=`0`;
            }
        }, 12);
        let op3 = setInterval(() => {
            moveY = moveY+1;
            bor1.style.transform=`translateY(${moveY.toString()}px)`;
            opacity1=opacity1-0.02;
            bor1.style.opacity=`${opacity1.toString()}`;
            if(moveY>59){
                clearInterval(op3);
                bor1.style.opacity=`0`;
            }
        }, 12);
        let bor4=document.createElement("span");
        bor4.id="bor4";
        bor4.style.borderRadius="2px";
        setTimeout(() => {
            iconMenu.appendChild(bor4);
            bor4.classList.remove("moveMenu");  
        }, 260);
        if(showMenu===false){
            let opc=0
            setTimeout(() => {
                tri.style.display="block";
                tri.style.position="absolute";
                tri.style.right="8px";
                let op4= setInterval(()=>{
                    if(smallMenuPo===true){
                        sclX=sclX+0.1;
                        bor4.style.width=`21px`;
                        bor4.style.right="-26pt";
                        tri.style.right="-34px";
                    }else {sclX=sclX+0.1}
                    opc=opc+0.04;
                    bor4.style.transform=`scale(${sclX})`;
                    tri.style.opacity=`${opc}`;
                    if(smallMenuPo===true){
                        if(sclX>2.5){
                            clearInterval(op4);
                        }
                    }else{
                        if(sclX>2.5){
                            clearInterval(op4);
                        }
                    }
                   
                },10);
               
            }, 50);
        }
        showMenu=true;
    }else{
        navMenu.classList.remove("moveMenu");
        const bor4 = document.querySelector("#bor4");
        bor4.classList.remove("moveMenu");
        let opacity = 1;
        let opacity1 = 0;
        let moveY3 = 36;
        let moveY2 = 48;
        let moveY1 = 59;
        let sclX = 2.5;
        let op= setInterval(() => {
             opacity=opacity-0.03;
             navMenu.style.opacity=opacity.toString();
             if(opacity<0.01){
                 clearInterval(op);
                 navMenu.style.opacity="0";
                 navMenu.style.display="none";
             }
         }, 10);
         //---------------------------------------------------
        if(showMenu===true){
            let opc=1;
            let op4= setInterval(()=>{
                sclX=sclX-0.1
                opc=opc-0.06;
                bor4.style.transform=`scale(${sclX})`;
                tri.style.opacity=`${opc}`;
                if(sclX<0){
                    clearInterval(op4);
                    
                }
            },10);
        }
        setTimeout(()=>{
            bor4.remove();
            tri.style.display="none";
        },450)
        
        let op1 = setInterval(() => {
            moveY3 = moveY3-1;
            bor3.style.transform=`translateY(${moveY3.toString()}px)`;
            opacity1=opacity1+0.03;
            bor3.style.opacity=`${opacity1.toString()}`;
            if(moveY3<1){
                clearInterval(op1);
            }
        }, 10);
        let op2 = setInterval(() => {
            moveY2 = moveY2-1;
            bor2.style.transform=`translateY(${moveY2.toString()}px)`;
            opacity1=opacity1+0.025;
            bor2.style.opacity=`${opacity1.toString()}`;
            if(moveY2<1){
                clearInterval(op2);
            }
        }, 10);
        let op3 = setInterval(() => {
            moveY1 = moveY1-1;
            bor1.style.transform=`translateY(${moveY1.toString()}px)`;
            opacity1=opacity1+0.025;
            bor1.style.opacity=`${opacity1.toString()}`;
            if(moveY1<1){
                clearInterval(op3);
            }
        }, 10);
        
        console.log(navMenu.attributes);
         showMenu=false;
    }
   
})
btnSmall.addEventListener("click",()=>{
    if(smallMenuPo===false){
        if(btnShams===true){
            toggle.style.transform="translateX(-15px)";
        }
        navMenu.style.width="50px";
        navMenu.classList.add("moveMenu");

        setTimeout(()=>{
            txtMenu[0].style.display="none";
            txtMenu[1].style.display="none";
        },90);
        txtMenu[0].classList.add("moveMenu");
        txtMenu[1].classList.add("moveMenu");

        btnSmall.style.right="35px";
        btnSmall.classList.add("moveMenu");

        tri1.style.transform="rotate(270deg)";
        tri1.classList.add("moveMenu");
        const bor4 = document.querySelector("#bor4");
        bor4.style.right="-29pt";
        bor4.style.width="21px";
        bor4.classList.add("moveMenu");

        tri.style.right="-39px";
        tri.classList.add("moveMenu");

        iconMenu1[0].style.width="25px";
        shams.style.width="30px";
        iconMenu1[0].style.height="25px";
        shams.style.height="15px";
        shams.style.marginLeft="0";
        iconMenu1[0].classList.add("moveMenu");
        shams.classList.add("moveMenu");
        toggle.style.width="15px";
        toggle.style.height="15px";
        toggle.classList.add("moveMenu");
        smallMenuPo=true;
    }else{
        if(btnShams===true){
            toggle.style.transform="translateX(-20px)";
            console.log("ok");
        }
        navMenu.classList.add("moveMenu");
        iconMenu1[0].classList.add("moveMenu");
        shams.classList.add("moveMenu");
        tri.classList.add("moveMenu");
        tri1.classList.add("moveMenu");
        navMenu.style.width="150px";
        setTimeout(()=>{
            txtMenu[0].style.display="block";
            txtMenu[1].style.display="block";
            txtMenu[0].classList.add("moveMenu");
            txtMenu[1].classList.add("moveMenu");
        },480);
        
        btnSmall.style.right="135px"
        tri1.style.transform="rotate(90deg)"
        const bor4 = document.querySelector("#bor4");
        bor4.classList.add("moveMenu");
        bor4.style.right="-7pt";
        bor4.style.width="61px";
        tri.style.right="8px";
        iconMenu1[0].style.width="16px";
        shams.style.width="40px";
        iconMenu1[0].style.height="16px";
        shams.style.height="20px";
        shams.style.marginLeft="10px";
        toggle.style.width="20px";
        toggle.style.height="20px";
        toggle.classList.add("moveMenu");
        smallMenuPo=false;
    }
   
})
toggle.addEventListener("click",()=>{
    if(setOk===false){
        if(btnShams===false){
            if(smallMenuPo===false){
                toggle.style.transform="translateX(-20px)";
            }else{
                toggle.style.transform="translateX(-15px)";
            }
            shams.style.background="green";
            txtShams.style.color="rgb(145, 235, 103)";
    
            // const dateArr = time.innerText.split("-")[1].split("/");
            // const dateArr1=[parseInt(dateArr[0]),parseInt(dateArr[1]),parseInt(dateArr[2]),];
            const tempDate=[nowDay,nowMonth,nowYear];
            clock(convertDateToSh(tempDate),time,"0.8pt");
            selectYear.placeholder="1400 - 1405";
            btnShams=true;
        }else if(btnShams===true){
            toggle.style.transform="translateX(0)";
            shams.style.background="rgb(199, 46, 46)";
            txtShams.style.color="rgb(255, 255, 255)";
            const tempDate=[nowDay,nowMonth,nowYear];
            clock(tempDate,time,"0.8pt");
            selectYear.placeholder="2021 - 2026";
            btnShams=false;
        }
    }else if(setOk===true){
        if(btnShams===false){
            if(smallMenuPo===false){
                toggle.style.transform="translateX(-20px)";
            }else{
                toggle.style.transform="translateX(-15px)";
            }
            shams.style.background="green";
            txtShams.style.color="rgb(145, 235, 103)";
    
            // const dateArr = time.innerText.split("-")[1].split("/");
            // const dateArr1=[parseInt(dateArr[0]),parseInt(dateArr[1]),parseInt(dateArr[2]),];
            const tempDate=[nowDay,nowMonth,nowYear];
            clock(convertDateToSh(tempDate),pTag,"0.4pt");
            btnShams=true;
        }else if(btnShams===true){
            toggle.style.transform="translateX(0)";
            shams.style.background="rgb(199, 46, 46)";
            txtShams.style.color="rgb(255, 255, 255)";
            const tempDate=[nowDay,nowMonth,nowYear];
            clock(tempDate,pTag,"0.4pt");
            btnShams=false;
        }
    }
})



function timeLeft(day){

    if( nowYear > parseInt(day[2])){//----------------------------------------------------------

       alert("سال را اشتباه وارد کرده اید");

    }else if(nowYear === parseInt(day[2])){ //---------------------------------------------------

        if(nowMonth > parseInt(day[1])){
            alert("ماه را اشتباه وارد کرده اید");
        }else if(nowMonth === parseInt(day[1])){
            
            daysLeft(targetDate);

        }else if(nowMonth < parseInt(day[1])){

            monthHeigh(targetDate);
        }

    }else if(nowYear < parseInt(day[2])){//------------------------------------------------------
        let daysYear = (parseInt(day[2]) - nowYear)*365;

        if(nowMonth > parseInt(day[1])){
            let res =0;
            let temp = nowMonth - parseInt(day[1]);
            temp=12-temp;
            let j =1;
            let i= nowMonth-1
            for(j;j<=temp;j++){
                if(i>11){
                    i=0;
                }
                if(monthArr[i]===1){
                    res=31+res;
                }else if(monthArr[i]===-2){
                    res=28+res;
                }else if(monthArr[i]===0){
                    res=30+res;
                }
                if(i>=11){
                    i=-1;
                }
                i++;
            }
            if(nowDay === parseInt(day[0])){
                dayLeft = res;
                if(daysYear>365){
                    let mx=365-dayLeft;
                    dayLeft=daysYear-mx;
                }
            }
            if(nowDay < parseInt(day[0])){
                daysLeft(targetDate);
                dayLeft=res+dayLeft;
                if(daysYear>365){
                    let mx=365-dayLeft;
                    dayLeft=daysYear-mx;
                }
            }
            if(nowDay > parseInt(day[0])){
                daysLeft(targetDate);
                let mx = parseInt(day[1])-2;
                if(mx === -1){
                    mx = 11;
                }
                if(monthArr[mx] === 1){
                    dayLeft=(res-31)+dayLeft;
                    if(daysYear>365){
                        let mx=365-dayLeft;
                        dayLeft=daysYear-mx;
                    }
                }
                if(monthArr[mx]===-2){
                    dayLeft=(res-28)+dayLeft;
                    if(daysYear>365){
                        let mx=365-dayLeft;
                        dayLeft=daysYear-mx;
                    }
                }
                if(monthArr[mx]===0){
                    dayLeft=(res-30)+dayLeft;
                    if(daysYear>365){
                        let mx=365-dayLeft;
                        dayLeft=daysYear-mx;
                    }
                }
            }

        }else if(nowMonth === parseInt(day[1])){
            daysLeft(targetDate);
            if(nowDay > parseInt(day[0])){
                dayLeft = daysYear-dayLeft;
            }
            if(nowDay <= parseInt(day[0])){
                dayLeft=daysYear+dayLeft;
            }
        }else if(nowMonth < parseInt(day[1])){
            monthHeigh(targetDate);
            dayLeft = dayLeft+daysYear;
            
        }    
       
    }

    hoursMinutes(targetTime);

    if(nowHours> targetTime[0]){
        dayLeft=dayLeft-1;
    }
    if((nowHours===targetTime[0]&&nowMinutes>targetTime[1])){
        dayLeft=dayLeft-1;
    }
    if(secondLeft<10&&minutesLeft<10&&hoursLeft<10){
        time.innerHTML=`0${secondLeft} : 0${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
    }else if(secondLeft<10&&minutesLeft<10){
        time.innerHTML=`0${secondLeft} : 0${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
    }else if(secondLeft<10&&hoursLeft<10){
        time.innerHTML=`0${secondLeft} : ${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
    }else if(minutesLeft<10&&hoursLeft<10){
        time.innerHTML=`${secondLeft} : 0${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
    }else if(secondLeft<10){
        time.innerHTML=`0${secondLeft} : ${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
    }else if(minutesLeft<10){
        time.innerHTML=`${secondLeft} : 0${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
    }else if(hoursLeft<10){
        time.innerHTML=`${secondLeft} : ${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
    }else {
        time.innerHTML=`${secondLeft} : ${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
    }

    

}
function timer(){
    
    clearInterval(decSecond);
    decSecond=setInterval(()=>{
        secondLeft=secondLeft-1;
        if(secondLeft<10&&minutesLeft<10&&hoursLeft<10){
            time.innerHTML=`0${secondLeft} : 0${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
        }else if(secondLeft<10&&minutesLeft<10){
            time.innerHTML=`0${secondLeft} : 0${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
        }else if(secondLeft<10&&hoursLeft<10){
            time.innerHTML=`0${secondLeft} : ${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
        }else if(minutesLeft<10&&hoursLeft<10){
            time.innerHTML=`${secondLeft} : 0${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
        }else if(secondLeft<10){
            time.innerHTML=`0${secondLeft} : ${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
        }else if(minutesLeft<10){
            time.innerHTML=`${secondLeft} : 0${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
        }else if(hoursLeft<10){
            time.innerHTML=`${secondLeft} : ${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
        }else {
            time.innerHTML=`${secondLeft} : ${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
        }
        if(secondLeft<0){
            secondLeft=59;
            minutesLeft=minutesLeft-1;
            if(secondLeft<10&&minutesLeft<10&&hoursLeft<10){
                time.innerHTML=`0${secondLeft} : 0${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
            }else if(secondLeft<10&&minutesLeft<10){
                time.innerHTML=`0${secondLeft} : 0${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
            }else if(secondLeft<10&&hoursLeft<10){
                time.innerHTML=`0${secondLeft} : ${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
            }else if(minutesLeft<10&&hoursLeft<10){
                time.innerHTML=`${secondLeft} : 0${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
            }else if(secondLeft<10){
                time.innerHTML=`0${secondLeft} : ${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
            }else if(minutesLeft<10){
                time.innerHTML=`${secondLeft} : 0${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
            }else if(hoursLeft<10){
                time.innerHTML=`${secondLeft} : ${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
            }else {
                time.innerHTML=`${secondLeft} : ${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
            }
            if(minutesLeft<0){
                minutesLeft=59;
                hoursLeft=hoursLeft-1;
                if(secondLeft<10&&minutesLeft<10&&hoursLeft<10){
                    time.innerHTML=`0${secondLeft} : 0${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
                }else if(secondLeft<10&&minutesLeft<10){
                    time.innerHTML=`0${secondLeft} : 0${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
                }else if(secondLeft<10&&hoursLeft<10){
                    time.innerHTML=`0${secondLeft} : ${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
                }else if(minutesLeft<10&&hoursLeft<10){
                    time.innerHTML=`${secondLeft} : 0${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
                }else if(secondLeft<10){
                    time.innerHTML=`0${secondLeft} : ${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
                }else if(minutesLeft<10){
                    time.innerHTML=`${secondLeft} : 0${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
                }else if(hoursLeft<10){
                    time.innerHTML=`${secondLeft} : ${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
                }else {
                    time.innerHTML=`${secondLeft} : ${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
                }
                if(hoursLeft<0){
                    hoursLeft=23;
                    dayLeft=dayLeft-1;
                    if(secondLeft<10&&minutesLeft<10&&hoursLeft<10){
                        time.innerHTML=`0${secondLeft} : 0${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
                    }else if(secondLeft<10&&minutesLeft<10){
                        time.innerHTML=`0${secondLeft} : 0${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
                    }else if(secondLeft<10&&hoursLeft<10){
                        time.innerHTML=`0${secondLeft} : ${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
                    }else if(minutesLeft<10&&hoursLeft<10){
                        time.innerHTML=`${secondLeft} : 0${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
                    }else if(secondLeft<10){
                        time.innerHTML=`0${secondLeft} : ${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
                    }else if(minutesLeft<10){
                        time.innerHTML=`${secondLeft} : 0${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
                    }else if(hoursLeft<10){
                        time.innerHTML=`${secondLeft} : ${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
                    }else {
                        time.innerHTML=`${secondLeft} : ${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
                    }
                    if(dayLeft<0){
                        clearInterval(decSecond);
                        if(secondLeft<10&&minutesLeft<10&&hoursLeft<10){
                            time.innerHTML=`0${secondLeft} : 0${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
                        }else if(secondLeft<10&&minutesLeft<10){
                            time.innerHTML=`0${secondLeft} : 0${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
                        }else if(secondLeft<10&&hoursLeft<10){
                            time.innerHTML=`0${secondLeft} : ${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
                        }else if(minutesLeft<10&&hoursLeft<10){
                            time.innerHTML=`${secondLeft} : 0${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
                        }else if(secondLeft<10){
                            time.innerHTML=`0${secondLeft} : ${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
                        }else if(minutesLeft<10){
                            time.innerHTML=`${secondLeft} : 0${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
                        }else if(hoursLeft<10){
                            time.innerHTML=`${secondLeft} : ${minutesLeft} : 0${hoursLeft}    -    ${dayLeft} روز `;
                        }else {
                            time.innerHTML=`${secondLeft} : ${minutesLeft} : ${hoursLeft}    -    ${dayLeft} روز `;
                        }
                    }
                    
                }
            }
        }
    },1000);
}
function daysLeft(day){
    
    if(nowDay > parseInt(day[0])){

        let temp =nowMonth-1;
        let temp2 =parseInt(day[1])-2;
        if(temp2 === -1){
            temp2=11;
        }
        if(nowMonth > parseInt(day[1])){
            if(monthArr[temp2]===1){
                dayLeft = ((31-nowDay)+parseInt(day[0]));
             }
             if(monthArr[temp2]===-2){
                 dayLeft = ((28-nowDay)+parseInt(day[0]));
             }
             if(monthArr[temp2]===0){
                 dayLeft = ((30-nowDay)+parseInt(day[0]));
             }
        }
        if(nowMonth < parseInt(day[1])){
            if(monthArr[temp]===1){
               dayLeft = (31-nowDay+1);
            }
            if(monthArr[temp]===-2){
                dayLeft = (28-nowDay+1);
            }
            if(monthArr[temp]===0){
                dayLeft = (30-nowDay+1);
            }
        }
        if(nowMonth === parseInt(day[1]) && nowYear === parseInt(day[2])){
            alert("روز را اشتباه وارد کرده اید");
        }
        if(nowMonth === parseInt(day[1]) && nowYear < parseInt(day[2])){
            dayLeft= nowDay - parseInt(day[0]);
        }

    }
    if( nowDay==parseInt(day[0])){
        dayLeft=0;
    }
    if( nowDay < parseInt(day[0])){
        dayLeft=parseInt(day[0]) - nowDay;
    }
    return dayLeft;
}
function monthHeigh(day){

            let res=0;
            let temp = parseInt(day[1]) - nowMonth-1;
            let j =nowMonth;
            for(let i= nowMonth;i<=j+temp;i++){
                if(monthArr[i]===1){
                    res=31+res;
                }else if(monthArr[i]===-2){
                    res=28+res;
                }else if(monthArr[i]===0){
                    res=30+res;
                }
            }
            console.log(`res : ${res}`);
            if(nowDay <= parseInt(day[0])){
                daysLeft(targetDate);
                dayLeft=res+dayLeft;
            }
            // 1.12.2021-12.12.12
            if(nowDay > parseInt(day[0])){ 

                daysLeft(targetDate);
                if(monthArr[nowMonth-1] === 1){
                    dayLeft=(res-31)+dayLeft;
                }
                if(monthArr[nowMonth-1]===-2){
                    dayLeft=(res-28)+dayLeft;
                }
                if(monthArr[nowMonth-1]===0){
                    dayLeft=(res-30)+dayLeft;
                }
            }
}
function hoursMinutes(time){
    if(nowMinutes > time[1]){
        minutesLeft= nowMinutes-time[1];
        minutesLeft= 60 - minutesLeft;
    }
    if(nowMinutes <= time[1]){
        minutesLeft=time[1]-nowMinutes;
    }


    if(nowHours > time[0]&&nowMinutes>time[1]){
        hoursLeft=(nowHours-time[0])+1;
        hoursLeft=24-hoursLeft;
    }
    if(nowHours > time[0]&&nowMinutes<=time[1]){
        hoursLeft=(nowHours-time[0]);
        hoursLeft=24-hoursLeft;
    }

    if(nowHours === time[0]&&nowMinutes>time[1]){
        hoursLeft=24-1;
    }
    if(nowHours === time[0]&&nowMinutes<=time[1]){
        hoursLeft=0;
    }

    if(nowHours < time[0]&&nowMinutes>time[1]){
        hoursLeft=(time[0]-nowHours)-1;
    }
    if(nowHours < time[0]&&nowMinutes<=time[1]){
        hoursLeft=(time[0]-nowHours);
    }

}
function clock(arr,vari,stroke){
    vari.innerHTML=`${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
    vari.style.webkitTextStroke=`${stroke} rgb(92, 56, 255)`;
    vari.style.webkitTextFillColor="#fff";
    clearInterval(watch);
    watch = setInterval(()=>{
        secondPlus=secondPlus+1;
        if(secondPlus<10 && minutesPlus <10 && hoursPlus <10){
            vari.innerHTML=`0${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
        }else if(secondPlus<10 && minutesPlus <10){
            vari.innerHTML=`0${secondPlus} : 0${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
        }else if(minutesPlus<10 && hoursPlus <10){
            vari.innerHTML=`${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
        }else if(secondPlus<10 && hoursPlus <10){
            vari.innerHTML=`0${secondPlus} : ${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
        }else if(secondPlus<10){
            vari.innerHTML=`0${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
        }else if(minutesPlus<10){
            vari.innerHTML=`${secondPlus} :0${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
        }else if(hoursPlus<10){
            vari.innerHTML=`${secondPlus} :${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
        }else{
            vari.innerHTML=`${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
        }
        
        if(secondPlus>59){
            secondPlus=0;
            minutesPlus=minutesPlus+1;
            if(secondPlus<10 && minutesPlus <10 && hoursPlus <10){
                vari.innerHTML=`0${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
            }else if(secondPlus<10 && minutesPlus <10){
                vari.innerHTML=`0${secondPlus} : 0${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
            }else if(minutesPlus<10 && hoursPlus <10){
                vari.innerHTML=`${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
            }else if(secondPlus<10 && hoursPlus <10){
                vari.innerHTML=`0${secondPlus} : ${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
            }else if(secondPlus<10){
                vari.innerHTML=`0${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
            }else if(minutesPlus<10){
                vari.innerHTML=`${secondPlus} :0${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
            }else if(hoursPlus<10){
                vari.innerHTML=`${secondPlus} :${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
            }else{
                vari.innerHTML=`${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
            }
            if(minutesPlus>59){
                minutesPlus=0;
                hoursPlus=hoursPlus+1;
                if(secondPlus<10 && minutesPlus <10 && hoursPlus <10){
                    vari.innerHTML=`0${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                }else if(secondPlus<10 && minutesPlus <10){
                    vari.innerHTML=`0${secondPlus} : 0${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                }else if(minutesPlus<10 && hoursPlus <10){
                    vari.innerHTML=`${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                }else if(secondPlus<10 && hoursPlus <10){
                    vari.innerHTML=`0${secondPlus} : ${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                }else if(secondPlus<10){
                    vari.innerHTML=`0${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                }else if(minutesPlus<10){
                    vari.innerHTML=`${secondPlus} :0${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                }else if(hoursPlus<10){
                    vari.innerHTML=`${secondPlus} :${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                }else{
                    vari.innerHTML=`${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                }
                if(hoursPlus>23){
                    hoursPlus=0;
                    if(secondPlus<10 && minutesPlus <10 && hoursPlus <10){
                        vari.innerHTML=`0${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                    }else if(secondPlus<10 && minutesPlus <10){
                        vari.innerHTML=`0${secondPlus} : 0${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                    }else if(minutesPlus<10 && hoursPlus <10){
                        vari.innerHTML=`${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                    }else if(secondPlus<10 && hoursPlus <10){
                        vari.innerHTML=`0${secondPlus} : ${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                    }else if(secondPlus<10){
                        vari.innerHTML=`0${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                    }else if(minutesPlus<10){
                        vari.innerHTML=`${secondPlus} :0${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                    }else if(hoursPlus<10){
                        vari.innerHTML=`${secondPlus} :${minutesPlus} : 0${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                    }else{
                        vari.innerHTML=`${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${arr[0]} / ${arr[1]} / ${arr[2]}`;
                    }
                }
            }
        
        }

    },1000);
}
function Validation(inpId){
    if(inpId.value.length===0){
        alertMessagesFunction("فیلد های مشخص شده را با عدد پر کنید",inpId);
        valid=false;
    }else if(isNaN(inpId.value)){
        alertMessagesFunction("لطفا فقط عدد وارد نمایید",inpId);
        valid=false;

    }else {valid=true}
}
function convertDateToMi(arrDate){
    let temp =arrDate[2]-1400;
    let tarYear=2022+temp;
    const strM=arrDate[1].toString();
    const strD=arrDate[0].toString();
    const numMd=parseInt(strM+strD);
    const chYear=1010;
    if(numMd>chYear){
        tarYear=tarYear;
    }else{
        tarYear=tarYear-1;
    }
    const searchM = {

        11:[01,02,11],
        12:[02,03,09],
        01:[03,04,11],
        02:[04,05,10],
        03:[05,06,10],
        04:[06,07,09],
        05:[07,08,09],
        06:[08,09,09],
        07:[09,10,08],
        08:[10,11,09],
        09:[11,12,09],
        10:[12,01,10],
        
    }
    let tarMonth ;
    let box= searchM[arrDate[1]];
    if(arrDate[0]>box[2]){
        tarMonth=box[1];
    }else{
        tarMonth=box[0];
    }
//---------------------------------------------
    let tarDay;
    if(arrDate[0]>box[2]){
        let temp = arrDate[0]-box[2];
        tarDay=temp;
    }else{
        let temp2= monthArr[tarMonth-1];
        if(temp2===1){
            temp2=31;
        }else if(temp2===0){
            temp2=30
        }else{
            temp2=28;
        }
        let temp = box[2]-arrDate[0];
        temp = temp2-temp;
        tarDay=temp;
    }
     
    const tarDate=[tarDay,tarMonth,tarYear];
    console.log(`${tarDay}/${tarMonth}/${tarYear}`);
    return tarDate;
   
}
function convertDateToSh(arrDate){
    let temp =arrDate[2]-2021;
    let tarYear=1400+temp;
    const strM=arrDate[1].toString();
    const strD=arrDate[0].toString();
    const numMd=parseInt(strM+strD);
    const chYear=320;
    if(numMd>chYear){
        tarYear=tarYear;
    }else{
        tarYear=tarYear-1;
    }

    const searchM = {

        04:[01,02,20],
        05:[02,03,21],
        06:[03,04,21],
        07:[04,05,22],
        08:[05,06,22],
        09:[06,07,22],
        10:[07,08,22],
        11:[08,09,21],
        12:[09,10,21],
        01:[10,11,20],
        02:[11,12,19],
        03:[12,01,20],
        
    }
    let tarMonth ;
    let box= searchM[arrDate[1]];
    if(arrDate[0]>box[2]){
        tarMonth=box[1];
    }else{
        tarMonth=box[0];
    }

    //---------------------------------------------

    let tarDay;
    if(arrDate[0]>box[2]){
        let temp = arrDate[0]-box[2];
        tarDay=temp;
    }else{
        let temp2= monthArrSh[tarMonth-1];
        if(temp2===1){
            temp2=31;
        }else if(temp2===0){
            temp2=30
        }else{
            temp2=29;
        }
        let temp = box[2]-arrDate[0];
        temp = temp2-temp;
        tarDay=temp;
    }
    
    const tarDate=[tarDay,tarMonth,tarYear];
    const tarDateFinal=`${tarYear}/${tarMonth}/${tarDay}`;
    return tarDate;
}
function alertMessagesFunction(text,v){
    let mess = document.createElement("p");
    mess.classList.add("alert");
    mess.innerHTML=`${text}`;
    alertMessage.appendChild(mess);
    v.style.border="solid 2px red";
    v.style.borderRadius="5px";
    setTimeout(()=>{
        mess.style.display="none";
        v.style.border="none";
    },6500)
}

//documents:
//2020 = [1398-1399];
//2021 = [1399,1400]; 20/3
//2022 = [1400,1401]; 20/3
//2011 = [1389,1390];

//
//1400 = [2021-2022]; 10/10

//1-January = [10/10,11/11];
//2-February = [11/11,9/12];[11/11,10/12];

//3-March = [9/12,11/01];[30/12];
//4-April = [11/01,10/02];
//5-May = [10/02,10/03];
//6-June = [10/03,09/04];
//7-July = [09/04,09/05];
//8-August = [09/05,09/06];
//9-September = [09/06,08/07];
//10-October = [08/07,09/08];
//11-November = [09/08,09/09];
//12-December = [09/09,10/10];