const getProfitW = (token, Idshop) => (
    fetch('http://localhost:1337/boss/statistic-week?Idshop=' + Idshop, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': token,
            Accept: 'application/json'
        },
        body: JSON.stringify({ Idshop })
    })
    .then(res=> res.json())
    .catch(err=> console.log(err))
)
export default getProfitW