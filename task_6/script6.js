const form = document.querySelector('#form');
const button = document.querySelector('#button');
const result = document.querySelector('#result');
const container = result.querySelector('.container');
const listImg = localStorage.getItem('listImg');

if (listImg) {
    jsonObj = JSON.parse(listImg);
    parseData(jsonObj);
}

button.addEventListener('click', async (e) => {
    e.preventDefault();
    const page = parseInt(form.querySelector('input[name="number"]').value);
    const limit = parseInt(form.querySelector('input[name="limit"]').value);
    await useRequest(page, limit);
});

function parseData(obj)
{
    container.innerHTML = '';

    obj.forEach(arr => {
        div = document.createElement('div');
        div.classList.add('image');

        container.append(div);

        img = document.createElement('img');
        img.setAttribute('src', arr.download_url);
        img.setAttribute('alt', arr.author);

        div.append(img);
    });
}

const useRequest = (page, limit) => {
    if ((page >= 0 && page < 11) && (limit >= 0 && limit < 11)) {
        return fetch(` https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                localStorage.removeItem('listImg');
                localStorage.setItem('listImg', JSON.stringify(json));
                parseData(json);
            })
            .catch(() => {
                console.log('error');
            });
    } else if ((isNaN(page) || page === '' || page < 0 || page > 10) && (limit >= 0 && limit < 11)) {
        container.textContent = 'Номер страницы вне диапазона от 1 до 10';
    } else if ((isNaN(limit) || limit === '' || limit < 0 || limit > 10) && (page >= 0 && page < 11)) {
        container.textContent = 'Лимит вне диапазона от 1 до 10';
    } else {
        container.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
    }
}
