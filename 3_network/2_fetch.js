fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    const headerDate = res.headers && res.headers.get('date') ? res.headers.get('date') : 'no response date';
    console.log('Status Code:', res.status);
    console.log('Date in Response header:', headerDate);

    return res.json();
}).then(users => {
    users.forEach(user => {
        console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    })
}).catch(err => {
    console.log(err.message);
});


