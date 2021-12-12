const time = document.querySelector("#time");
const date = new Date();
const monthArr=[1,-2,1,0,1,0,1,1,0,1,0,1];

let target = prompt("تاریخ مورد نظز را وارد نمایید :");
target=target.split("-");
const targetDate = target[0].split(".");
const targetTime = target[1].split(".");

let dayLeft=0;

timer();

function timer(){
   
    timeLeft(targetDate);
}

function daysLeft(day){
    
    const nowDay = date.getDate();
    const nowMonth = 8;
    // const nowMonth = date.getMonth()+1;

    if(nowDay > parseInt(day[0])){
        let temp =nowMonth-1;
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
        if(nowMonth >= parseInt(day[1])){
            alert("روز را اشتباه وارد کرده اید");
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


function timeLeft(day){

    const nowYear = date.getFullYear();
    const nowMonth = 8;
    // const nowMonth = date.getMonth()+1;
    const nowDay = date.getDate();

    if( nowYear > parseInt(day[2])){
       alert("سال را اشتباه وارد کرده اید");
    }else if(nowYear === parseInt(day[2])){

        if(nowMonth > parseInt(day[1])){
            alert("ماه را اشتباه وارد کرده اید");
        }else if(nowMonth === parseInt(day[1])){
            
            daysLeft(targetDate);

        }else if(nowMonth < parseInt(day[1])){
            let res=0;
            let temp = parseInt(day[1]) - nowMonth-1;
            let j =nowMonth-1;
            for(let i= nowMonth-1;i<=j+temp;i++){
                if(monthArr[i]===1){
                    res=31+res;
                }else if(monthArr[i]===-2){
                    res=28+res;
                }else if(monthArr[i]===0){
                    res=30+res;
                }
            }
            if(nowDay <= parseInt(day[0])){
                daysLeft(targetDate);
                dayLeft=res+dayLeft;
            }
            // 1.12.2021-12.12.12
            if(nowDay > parseInt(day[0])){ 
                daysLeft(targetDate);
                console.log(dayLeft);
                console.log(res);
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

    }else if(nowYear < parseInt(day[2])){
        
        if(nowMonth > parseInt(day[1])){
            let c = 12 -nowMonth;
            let x = parseInt(day[1])+c;
            let i= nowMonth;
            if(i>=11){
                i=0;
            }
            let res=0;
            for(i;i<x;i++){
                if(monthArr[i]===1){
                    res=31+res;
                }else if(monthArr[i]===-2){
                    res=28+res;
                }else if(monthArr[i]===0){
                    res=30+res;
                }
                if(i>=11){
                    i=0;
                }
            }
            daysLeft(targetDate);
            dayLeft=res+dayLeft;
        }else if(nowMonth === parseInt(day[1])){
            
            daysLeft(targetDate);

        }else if(nowMonth < parseInt(day[1])){
            let res=0;
            let temp = parseInt(day[1]) - nowMonth-1;
            console.log(temp);
            let j =nowMonth;
            for(let i= nowMonth;i<j+temp;i++){
                if(monthArr[i]===1){
                    res=31+res;
                }else if(monthArr[i]===-2){
                    res=29+res;
                }else if(monthArr[i]===0){
                    res=30+res;
                }
            }
            daysLeft(targetDate);
            dayLeft=res+dayLeft;
            
        }
    }
    
    time.innerHTML=`33 : 48 : 09   -   ${dayLeft} روز `;

}



//1.12.2021-12.12.12



// const Millisecond = ((parseInt(targetDate[2])-nowYears)*365)+((parseInt(targetDate[1])-nowMonth-1)*30)+((parseInt(targetDate[0])-nowDay));



// console.log(nowTime);
// console.log(timesLeft);
// console.log(targetDate);
// console.log(targetTime);
// console.log(Millisecond);

