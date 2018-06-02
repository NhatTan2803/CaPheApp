const getDrink = (token,user_shop_id) => (
    fetch(`http://localhost:1337/drinks/get?drink_shop_id=${user_shop_id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'token': token,
            },
            body: JSON.stringify({user_shop_id})
        })
        .then(res => res.json())
        .catch(err => console.log('Lay du lieu bi loi'))
);

export default getDrink;