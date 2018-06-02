const getProfitD = (token, Idshop) => (
    fetch(`http://localhost:1337/boss/statistic-day?Idshop=${Idshop}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'token': token,
        },
    })
        .then(res => res.json())
    .catch(err => console.log(err))
)
export default getProfitD