// let bday = '1 Jan 2023'
let bday = prompt("Which date you want?  Date Formate:1 Jan 2023")

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let secondss = document.getElementById('seconds');


const countdown = () => {
    let wantTime = new Date(bday);
    let todayTime = new Date;


    let seconds = (wantTime - todayTime) / 1000;
    let day = Math.floor(seconds / 3600 / 24);
    let hrs = Math.floor(seconds / 3600) % 24;
    let min = Math.floor(seconds / 60) % 60;
    let sec = Math.floor(seconds % 60);



    days.innerHTML = formateTime(day);
    hours.innerHTML = formateTime(hrs);
    minutes.innerHTML = formateTime(min);
    secondss.innerHTML = formateTime(sec);
}

const formateTime = (abc) => {
    return abc < 10 ? `0${abc}` : abc;
}


countdown();

setInterval(countdown, 1000);