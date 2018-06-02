const getStaffApi = (token, idShop) => (
    fetch(`http://localhost:1337/boss/get-listStaff?idShop=${idShop}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'token': token
            },
            body: JSON.stringify({ idShop })
        })
        .then(res => res.json())
        .catch(err => console.log(err))
)
export default  getStaffApi;