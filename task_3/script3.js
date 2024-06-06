let userName = localStorage.getItem('userName');
let storageDate = localStorage.getItem('date');
let date = new Date();
let currentDate = getCurrentDate(date);

if (! userName) {
    userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    if (userName !== null && userName !== '') {
        localStorage.setItem('userName', userName);
    }
} else if (storageDate === null) {
    localStorage.setItem('date', currentDate);
} else {
    alert(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${localStorage.getItem('date')}`);
    localStorage.removeItem('date');
    localStorage.setItem('date', currentDate);
}

function getCurrentDate(date)
{
    let day = getStringDate(date.getDate());
    let month = getStringDate(parseInt(date.getMonth() + 1));
    let year = getStringDate(date.getFullYear());
    let hour = getStringDate(date.getHours());
    let minutes = getStringDate(date.getMinutes());

    return `${day}.${month}.${year} в ${hour}:${minutes}`;
}

function getStringDate(value)
{
    return value > 9 ? value : '0' + value;
}
