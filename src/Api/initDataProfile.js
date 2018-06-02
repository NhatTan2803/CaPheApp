const  initDataprofile= (token) => (
    
    fetch(`http://localhost:1337/users/profile`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'token': token,
            },
        })
        .then(res => res.json())
        .catch(err => console.log('Lay du lieu bi loi'))
);

export default initDataprofile;