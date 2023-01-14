let userInformation = prompt("Enter your name!");

if(userInformation === '') {
    alert("Incorrect information");
    window.location.reload();
} else if (userInformation === null) {
    userInformation = "Anonymous";
}

const userName = document.querySelector('#userName');

userName.innerHTML = `Hello ${userInformation}!`;

const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

const time = () => {
    const T = new Date();
    let Thour = T.getHours();
    let Tminute = T.getMinutes();
    let Tsecond = T.getSeconds();

    hour.innerHTML = Thour;
    minute.innerHTML = Tminute;
    second.innerHTML = Tsecond;
}

setInterval(time, 1000);
