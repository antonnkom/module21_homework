const form = document.querySelector('#form');
const button = document.querySelector('#button');
const result = document.querySelector('#result');

function isEmpty(obj)
{
    return !Object.keys(obj).length > 0;
}

function parserData(obj)
{
    result.innerHTML = '';
    
    const ul = document.createElement('ul');
    result.append(ul);

    obj.forEach(arr => {
        const li = document.createElement('li');
        li.textContent = arr.title;

        if (arr.completed) {
            li.classList.add('crossout');
        }

        ul.append(li);
    });
}

const useRequest = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            if (!isEmpty(json)) {
                parserData(json);
            } else {
                result.textContent = 'Пользователь с указанным id не найден';
            }
        })
        .catch(() => {
            console.log('error');
        });
}

button.addEventListener('click', async (e) => {
    e.preventDefault();
    const userId = form.querySelector('input').value;
    await useRequest(userId);
});
