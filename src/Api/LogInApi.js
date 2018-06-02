const LogInApi = (email, password) => (
    fetch(`http://localhost:1337/users/login?user_email=${email}&user_password=${password}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .catch(err => console.log('loi login api'))
);

module.exports = LogInApi;