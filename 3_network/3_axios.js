const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Status Code:', res.status);
        console.log('Date in Response header:', headerDate);

        const users = res.data;

        users.forEach(user => {
            console.log(`Got user with id: ${user.id}, name: ${user.name}`);

        })
    })
    .catch(err => {
        console.log('Error: ', err.message);
    });