
export default function searchItems(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items/?q=${data}`
        fetch(url, { method: 'GET' })
            .then((response) => response.json())
            .then(res => { 
                console.log(res); 
                resolve(res) })
            .catch(err => reject(err))
    })
}
