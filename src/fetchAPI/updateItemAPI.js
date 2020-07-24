
export default function callAPI(data) {
    console.log(data)
    const objFetch = {name: data.name,percent:data.percent}
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items/${data.id}`
        fetch(url, {
            method: 'PUT',
            headers: { "Content-Type": "Application/json" },//để post truyền vào body
            body: JSON.stringify(objFetch)
        })
            .then((response) => response.json())
            .then(res => {
                //console.log(res); 
                resolve(res)
            })
            .catch(err => reject(err))
    })
}
