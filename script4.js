const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let randomNumber = Math.round(Math.random(1, 100) * 100);

        if ((randomNumber % 2) === 0) {
            resolve({
                message: 'Завершено успешно',
                data: randomNumber
            });
        } else {
            reject({
                message: 'Завершено с ошибкой',
                data: randomNumber
            })
        }
    }, 3000);
});

myPromise
    .then((result) => {
        console.log(`${result.message}. Сгенерированное число - ${result.data}`);
    })
    .catch((error) => {
        console.log(`${error.message}. Сгенерированное число - ${error.data}`)
    });