const time = document.querySelector("#time");
const date = new Date();
const monthArr=[1,-2,1,0,1,0,1,1,0,1,0,1];

const nowYear = date.getFullYear();
// const nowMonth = 8;
const nowMonth = date.getMonth()+1;
const nowDay = date.getDate();
console.log(nowDay,nowMonth,nowYear);

let target = prompt("تاریخ مورد نظز را وارد نمایید :");
target=target.split("-");
const targetDate = target[0].split(".");
console.log(parseInt(targetDate[0]),parseInt(targetDate[1]),parseInt(targetDate[2]));
const targetTime = target[1].split(".");

let dayLeft=0;

//1.5.2022-12.12.12
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
            let i= nowMonth
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
            }
            if(nowDay < parseInt(day[0])){
                daysLeft(targetDate);
                dayLeft=res+dayLeft;
            }
            if(nowDay > parseInt(day[0])){
                daysLeft(targetDate);
                if(monthArr[parseInt(day[1])-2] === 1){
                    dayLeft=(res-31)+dayLeft;
                }
                if(monthArr[parseInt(day[1])-2]===-2){
                    dayLeft=(res-28)+dayLeft;
                }
                if(monthArr[parseInt(day[1])-2]===0){
                    dayLeft=(res-30)+dayLeft;
                }
            }

        }else if(nowMonth === parseInt(day[1])){
            daysLeft(targetDate);
            dayLeft = daysYear-dayLeft;
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

timer();
