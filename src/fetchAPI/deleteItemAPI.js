
export default function callAPI(data) {
    console.log(data)
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items/${data.id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then(res => {
                //console.log(res); 
                resolve(res)
            })
            .catch(err => reject(err))
    })
}
