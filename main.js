const time = document.querySelector("#time");
const boxDate = document.querySelector("#arrivalDate");
const selectDay = document.querySelector("#selectDay");
const selectMonth = document.querySelector("#selectMonth");
const selectYear = document.querySelector("#selectYear");
const ok = document.querySelector("#ok");
const btnDate = document.querySelector("#btnDate");
const btnClose = document.querySelector("#close");

const date = new Date();
const monthArr=[1,-2,1,0,1,0,1,1,0,1,0,1];
const nowYear = date.getFullYear();
const nowMonth = date.getMonth()+1;
const nowDay = date.getDate();

const nowHours = date.getHours();
const nowMinutes = date.getMinutes();
const nowSeconds = date.getSeconds();

let dayLeft=0;
let targetDate=[nowDay,nowMonth,nowYear];
let targetTime="";
console.log(nowDay,nowMonth,nowYear);
console.log(nowHours,nowMinutes,nowSeconds);

ok.addEventListener("click",()=>{
    const tDay = selectDay.value;
    const tMonth = selectMonth.value;
    const tYear = selectYear.value;
    targetDate = [tDay,tMonth,tYear];
    timer();
});
btnDate.addEventListener("click",()=>{
    boxDate.style.display="block";
    let opacity = 0;
    for(let i=0;i<=1000;i++){
        setTimeout(()=>{
            opacity=opacity+0.0005;
            boxDate.style.opacity=opacity.toString();
        },10);
    }
});
btnClose.addEventListener("click",()=>{
    let opacity = 0.5;
    for(let i=0;i<=1000;i++){
        setTimeout(()=>{
            opacity=opacity-0.0005;
            boxDate.style.opacity=opacity.toString();
        },10);
    }
    setTimeout(()=>{
        boxDate.style.display="none";
    },300);
    
});


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
    
    time.innerHTML=`33 : 48 : 09   -   ${dayLeft} روز `;

}

function timer(){
   
    timeLeft(targetDate);
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


