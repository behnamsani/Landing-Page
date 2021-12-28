const time = document.querySelector("#time");
const main = document.querySelector("#main");
const boxDate = document.querySelector("#arrivalDate");
const banner = document.querySelector("#banner");
const iconClock = document.querySelector("#iconClock");
const iconMenu = document.querySelector("#iconMenu");
const iconMenu1 = document.querySelector(".iconMenu");
const bor = document.querySelector(".bor");
const navMenu = document.querySelector("#navMenu");
const bor1 = document.querySelector("#bor1");
const bor2 = document.querySelector("#bor2");
const bor3 = document.querySelector("#bor3");
const tri = document.querySelector(".triangle");
const tri1 = document.querySelector(".triangle1");
const txtMenu = document.querySelector(".txtMenu");
const btnSmall = document.querySelector("#small");

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
let nowClock = clock();
let valid=false;
let valid2=false;
let valid3=true;
let valid4=false;
let showMenu=false;
let smallMenuPo=false;

const heightHeader = 100;
banner.style.height=heightHeader;
let heightMenu = window.outerHeight - heightHeader;
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

    Validation(selectYear);
    Validation(selectHours);
    Validation(selectMinutes);

    if(parseInt(selectHours.value)>23 || parseInt(selectHours.value)<1){
        let mess = document.createElement("p");
        mess.id="alert2";
        boxDate.appendChild(mess);
        mess.innerHTML=`ساعت باید بین عدد 1 تا 23 باشد`;
        selectHours.style.outline="solid 2px red";
        setTimeout(()=>{
            mess.style.display="none";
            selectHours.style.outline="none";
        },6500);
        valid2=false;
    }else if(parseInt(selectMinutes.value)>59 || parseInt(selectMinutes.value)<0){
        let mess = document.createElement("p");
        mess.id="alert2";
        boxDate.appendChild(mess);
        mess.innerHTML=`دقیقه باید بین 0 تا 59 باشد`;
        selectMinutes.style.outline="solid 2px red";
        setTimeout(()=>{
            mess.style.display="none";
            selectMinutes.style.outline="none";
        },6500);
        valid2=false;
    }else if(parseInt(selectYear.value)<nowYear || parseInt(selectYear.value)>2026){
        let mess = document.createElement("p");
        mess.id="alert2";
        boxDate.appendChild(mess);
        mess.innerHTML=`سال نباید بیشتر از سال 2026 و کمتر از سال جاری باشد`;
        mess.style.fontSize="0.8rem";
        selectYear.style.outline="solid 2px red";
        setTimeout(()=>{
            mess.style.display="none";
            selectYear.style.outline="none";
        },6500);
        valid2=false;
    }else {valid2=true}

    if(parseInt(selectDay.value)===31){
        for(let i=0;i<threeArr.length;i++){
            if(parseInt(selectMonth.value)===threeArr[i]){
                let mess = document.createElement("p");
                mess.id="alert2";
                boxDate.appendChild(mess);
                mess.innerHTML=`این ماه سی روز دارد`;
                mess.style.fontSize="1rem";
                selectDay.style.outline="solid 2px red";
                setTimeout(()=>{
                    mess.style.display="none";
                    selectDay.style.outline="none";
                },6500);
                valid3=false;
                break;
            }else{
                valid3=true;
            }
        }
    }else if(parseInt(selectMonth.value)===2){
        if(parseInt(selectDay.value)>28){
            let mess = document.createElement("p");
            mess.id="alert2";
            boxDate.appendChild(mess);
            mess.innerHTML=`این ماه 28 روز دارد`;
            mess.style.fontSize="1rem";
            selectDay.style.outline="solid 2px red";
            setTimeout(()=>{
                mess.style.display="none";
                selectDay.style.outline="none";
            },6500);
            valid3=false;
        }else {valid3=true}
    }else(valid3=true);
    console.log(nowYear);
    console.log( parseInt(selectYear.value));
    console.log( parseInt(selectMonth.value));
    if( nowYear > parseInt(selectYear.value)){
        let mess = document.createElement("p");
        mess.id="alert2";
        boxDate.appendChild(mess);
        mess.innerHTML=`سال نمی تواند کوچکتر از سال جاری باشد`;
        mess.style.fontSize="0.8rem";
        selectYear.style.outline="solid 2px red";
        setTimeout(()=>{
            mess.style.display="none";
            selectYear.style.outline="none";
        },6500);
        valid4=false;
    }else if (nowYear === parseInt(selectYear.value) && nowMonth > parseInt(selectMonth.value)){
        let mess = document.createElement("p");
        mess.id="alert2";
        boxDate.appendChild(mess);
        mess.innerHTML=`ماه نمی تواند کوچکتر از ماه جاری باشد`;
        mess.style.fontSize="0.8rem";
        selectMonth.style.outline="solid 2px red";
        setTimeout(()=>{
            mess.style.display="none";
            selectMonth.style.outline="none";
        },6500);
        valid4=false;
    }else if (nowYear === parseInt(selectYear.value) && nowMonth === parseInt(selectMonth.value) && nowDay > parseInt(selectDay.value)){
        let mess = document.createElement("p");
        mess.id="alert2";
        boxDate.appendChild(mess);
        mess.innerHTML=`روز نمی تواند کوچکتر از روز جاری باشد`;
        mess.style.fontSize="0.8rem";
        selectDay.style.outline="solid 2px red";
        setTimeout(()=>{
            mess.style.display="none";
            selectDay.style.outline="none";
        },6500);
        valid4=false;
    }else if (nowYear === parseInt(selectYear.value) && nowMonth === parseInt(selectMonth.value) && nowDay === parseInt(selectDay.value) && nowHours > parseInt(selectHours.value)){
        let mess = document.createElement("p");
        mess.id="alert2";
        boxDate.appendChild(mess);
        mess.innerHTML=`ساعت نمی تواند کوچکتر از ساعت جاری باشد`;
        mess.style.fontSize="0.8rem";
        selectHours.style.outline="solid 2px red";
        setTimeout(()=>{
            mess.style.display="none";
            selectHours.style.outline="none";
        },6500);
        valid4=false;
    }else if (nowYear === parseInt(selectYear.value) && nowMonth === parseInt(selectMonth.value) && nowDay === parseInt(selectDay.value) && nowHours === parseInt(selectHours.value) && nowMinutes > parseInt(selectMinutes.value)){
        let mess = document.createElement("p");
        mess.id="alert2";
        boxDate.appendChild(mess);
        mess.innerHTML=`دقیقه نمی تواند کوچکتر از دقیقه جاری باشد`;
        mess.style.fontSize="0.8rem";
        selectMinutes.style.outline="solid 2px red";
        setTimeout(()=>{
            mess.style.display="none";
            selectMinutes.style.outline="none";
        },6500);
        valid4=false;
    }else{valid4=true}
  
    
    if(valid===true && valid2===true && valid3===true && valid4===true){
        clearInterval(watch);
        clearInterval(watch2);
        clearInterval(decSecond);
        time.style.webkitTextStroke=" 0.8pt rgb(155, 0, 0)";
        iconClock.style.display="block";
        setTimeout(()=>{
            iconClock.style.opacity="0.4";
        },1000);

        watch2 = clock2();
        main.appendChild(pTag);

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
        console.log(navMenu.attributes);
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
        navMenu.style.width="50px";
        navMenu.classList.add("moveMenu");
        console.log(navMenu.attributes);

        setTimeout(()=>{
            txtMenu.style.display="none";
        },90);
        txtMenu.classList.add("moveMenu");

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

        iconMenu1.style.width="25px";
        iconMenu1.style.height="25px";
        iconMenu1.classList.add("moveMenu");
        smallMenuPo=true;
    }else{
        navMenu.classList.add("moveMenu");
        iconMenu1.classList.add("moveMenu");
        tri.classList.add("moveMenu");
        tri1.classList.add("moveMenu");
        navMenu.style.width="150px";
        setTimeout(()=>{
            txtMenu.style.display="block";
            txtMenu.classList.add("moveMenu");
        },480);
        
        btnSmall.style.right="135px"
        tri1.style.transform="rotate(90deg)"
        const bor4 = document.querySelector("#bor4");
        bor4.classList.add("moveMenu");
        bor4.style.right="-7pt";
        bor4.style.width="61px";
        tri.style.right="8px";
        iconMenu1.style.width="16px";
        iconMenu1.style.height="16px";
        smallMenuPo=false;
        console.log(navMenu.attributes[1].value.split(";").splice(4,1));
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
function clock(){
    time.innerHTML=`${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    time.style.webkitTextStroke=" 0.8pt rgb(92, 56, 255)";
clearInterval(watch);
watch = setInterval(()=>{
    secondPlus=secondPlus+1;
    if(secondPlus<10 && minutesPlus <10 && hoursPlus <10){
        time.innerHTML=`0${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(secondPlus<10 && minutesPlus <10){
        time.innerHTML=`0${secondPlus} : 0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(minutesPlus<10 && hoursPlus <10){
        time.innerHTML=`${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(secondPlus<10 && hoursPlus <10){
        time.innerHTML=`0${secondPlus} : ${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(secondPlus<10){
        time.innerHTML=`0${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(minutesPlus<10){
        time.innerHTML=`${secondPlus} :0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(hoursPlus<10){
        time.innerHTML=`${secondPlus} :${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }
    
    if(secondPlus>59){
        secondPlus=0;
        minutesPlus=minutesPlus+1;
        if(secondPlus<10 && minutesPlus <10 && hoursPlus <10){
            time.innerHTML=`0${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }else if(secondPlus<10 && minutesPlus <10){
            time.innerHTML=`0${secondPlus} : 0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }else if(minutesPlus<10 && hoursPlus <10){
            time.innerHTML=`${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }else if(secondPlus<10 && hoursPlus <10){
            time.innerHTML=`0${secondPlus} : ${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }else if(secondPlus<10){
            time.innerHTML=`0${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }else if(minutesPlus<10){
            time.innerHTML=`${secondPlus} :0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }else if(hoursPlus<10){
            time.innerHTML=`${secondPlus} :${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }
        if(minutesPlus>59){
            minutesPlus=0;
            hoursPlus=hoursPlus+1;
            if(secondPlus<10 && minutesPlus <10 && hoursPlus <10){
                time.innerHTML=`0${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }else if(secondPlus<10 && minutesPlus <10){
                time.innerHTML=`0${secondPlus} : 0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }else if(minutesPlus<10 && hoursPlus <10){
                time.innerHTML=`${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }else if(secondPlus<10 && hoursPlus <10){
                time.innerHTML=`0${secondPlus} : ${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }else if(secondPlus<10){
                time.innerHTML=`0${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }else if(minutesPlus<10){
                time.innerHTML=`${secondPlus} :0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }else if(hoursPlus<10){
                time.innerHTML=`${secondPlus} :${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }
            if(hoursPlus>23){
                hoursPlus=0;
                if(secondPlus<10 && minutesPlus <10 && hoursPlus <10){
                    time.innerHTML=`0${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }else if(secondPlus<10 && minutesPlus <10){
                    time.innerHTML=`0${secondPlus} : 0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }else if(minutesPlus<10 && hoursPlus <10){
                    time.innerHTML=`${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }else if(secondPlus<10 && hoursPlus <10){
                    time.innerHTML=`0${secondPlus} : ${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }else if(secondPlus<10){
                    time.innerHTML=`0${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }else if(minutesPlus<10){
                    time.innerHTML=`${secondPlus} :0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }else if(hoursPlus<10){
                    time.innerHTML=`${secondPlus} :${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }
            }
        }

    }

},1000);
}
 function clock2(){
    
    if(secondPlus<10 && minutesPlus <10 && hoursPlus <10){
        pTag.innerHTML=`0${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(secondPlus<10 && minutesPlus <10){
        pTag.innerHTML=`0${secondPlus} : 0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(minutesPlus<10 && hoursPlus <10){
        pTag.innerHTML=`${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(secondPlus<10 && hoursPlus <10){
        pTag.innerHTML=`0${secondPlus} : ${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(secondPlus<10){
        pTag.innerHTML=`0${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(minutesPlus<10){
        pTag.innerHTML=`${secondPlus} :0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(hoursPlus<10){
        pTag.innerHTML=`${secondPlus} :${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }
    pTag.style.webkitTextStroke=" 0.4pt rgb(92, 56, 255)";
    pTag.style.webkitTextFillColor="#fff";
    clearInterval(watch);
    watch = setInterval(()=>{
    secondPlus=secondPlus+1;
    if(secondPlus<10 && minutesPlus <10 && hoursPlus <10){
        pTag.innerHTML=`0${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(secondPlus<10 && minutesPlus <10){
        pTag.innerHTML=`0${secondPlus} : 0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(minutesPlus<10 && hoursPlus <10){
        pTag.innerHTML=`${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(secondPlus<10 && hoursPlus <10){
        pTag.innerHTML=`0${secondPlus} : ${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(secondPlus<10){
        pTag.innerHTML=`0${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(minutesPlus<10){
        pTag.innerHTML=`${secondPlus} :0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }else if(hoursPlus<10){
        pTag.innerHTML=`${secondPlus} :${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
    }
    if(secondPlus>59){
        secondPlus=0;
        minutesPlus=minutesPlus+1;
        if(secondPlus<10 && minutesPlus <10 && hoursPlus <10){
            pTag.innerHTML=`0${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }else if(secondPlus<10 && minutesPlus <10){
            pTag.innerHTML=`0${secondPlus} : 0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }else if(minutesPlus<10 && hoursPlus <10){
            pTag.innerHTML=`${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }else if(secondPlus<10 && hoursPlus <10){
            pTag.innerHTML=`0${secondPlus} : ${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }else if(secondPlus<10){
            pTag.innerHTML=`0${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }else if(minutesPlus<10){
            pTag.innerHTML=`${secondPlus} :0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }else if(hoursPlus<10){
            pTag.innerHTML=`${secondPlus} :${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
        }
        if(minutesPlus>59){
            minutesPlus=0;
            hoursPlus=hoursPlus+1;
            if(secondPlus<10 && minutesPlus <10 && hoursPlus <10){
                pTag.innerHTML=`0${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }else if(secondPlus<10 && minutesPlus <10){
                pTag.innerHTML=`0${secondPlus} : 0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }else if(minutesPlus<10 && hoursPlus <10){
                pTag.innerHTML=`${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }else if(secondPlus<10 && hoursPlus <10){
                pTag.innerHTML=`0${secondPlus} : ${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }else if(secondPlus<10){
                pTag.innerHTML=`0${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }else if(minutesPlus<10){
                pTag.innerHTML=`${secondPlus} :0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }else if(hoursPlus<10){
                pTag.innerHTML=`${secondPlus} :${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
            }
            if(hoursPlus>23){
                hoursPlus=0;
                if(secondPlus<10 && minutesPlus <10 && hoursPlus <10){
                    pTag.innerHTML=`0${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }else if(secondPlus<10 && minutesPlus <10){
                    pTag.innerHTML=`0${secondPlus} : 0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }else if(minutesPlus<10 && hoursPlus <10){
                    pTag.innerHTML=`${secondPlus} : 0${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }else if(secondPlus<10 && hoursPlus <10){
                    pTag.innerHTML=`0${secondPlus} : ${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }else if(secondPlus<10){
                    pTag.innerHTML=`0${secondPlus} : ${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }else if(minutesPlus<10){
                    pTag.innerHTML=`${secondPlus} :0${minutesPlus} : ${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }else if(hoursPlus<10){
                    pTag.innerHTML=`${secondPlus} :${minutesPlus} : 0${hoursPlus}   -   ${nowDay} / ${nowMonth} / ${nowYear}`;
                }
            }
        }

    }

    },1000);
    
}
function Validation(inpId){
    if(inpId.value.length===0){
        let mess = document.createElement("p");
        mess.id="alert";
        boxDate.appendChild(mess);
        mess.innerHTML=`فیلد های مشخص شده را با عدد پر کنید`;
        inpId.style.outline="solid 2px red";
        setTimeout(()=>{
            mess.style.display="none";
            inpId.style.outline="none";
        },6000);
        valid=false;
    }else if(isNaN(inpId.value)){
        let mess = document.createElement("p");
        mess.id="alert";
        boxDate.appendChild(mess);
        mess.innerHTML=`لطفا فقط عدد وارد نمایید`;
        inpId.style.outline="solid 2px red";
        setTimeout(()=>{
            mess.style.display="none";
            inpId.style.outline="none";
        },6000);
        valid=false;

    }else {valid=true}
}
function convertDate(arrDate){
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


//documents:
//2020 = [1398-1399];
//2021 = [1399,1400]; 20/3
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