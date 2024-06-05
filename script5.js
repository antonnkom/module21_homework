const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    const userId = parseInt(document.querySelector('input[name="userId"]').value);
    const url = `https://jsonplaceholder.typicode.com/users/3/todos`;

    const options = {
        method: 'POST',
    }

    fetch (url, options)
        .then (response => response.json())
        .then (json => console.log(json))
        .catch (console.log('Пользователь с указанным id не найден'));
});