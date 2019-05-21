const time = document.querySelector('.dynamic-time');
const dateClass = document.querySelector('.date');
const dateStringClass = document.querySelector('.dateString');

function clockTick() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let dateString = date.toDateString().slice(4);
    dateString = dateString.slice(0, 6) + ',' + dateString.slice(6);
    dateClass.innerHTML = `${hours}:${minutes} `;
    dateStringClass.innerHTML = `${dateString}`;

}

/* test.slice(0,7) + ',' +test.slice(7) */
setInterval(clockTick, 1000);