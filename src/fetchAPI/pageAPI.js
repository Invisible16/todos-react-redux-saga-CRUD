
export default function pagination(data) {
    console.log('pageAPI',data)
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items/?_page=${data.curPage}&_limit=${data.limit}`
        fetch(url, { method: 'GET' })
            .then((response) => response.json())
            .then(res => { 
                console.log(res); 
                resolve(res) })
            .catch(err => reject(err))
    })
}
