
export default function searchItems(data) {
    console.log(data, typeof(data))
    let searchUrl;
    if (typeof(data)=='string'){
        searchUrl=`http://localhost:3001/items/?q=${data}`
    } else searchUrl=`http://localhost:3001/items/?q=${data.textSearch}&_page=${data.pagination.curPage}&_limit=${data.pagination.limit}`
    //&_page=${data.pagination.curPage}&_limit=${data.pagination.limit}
    return new Promise((resolve, reject) => {
        const url = searchUrl
        fetch(url, { method: 'GET' })
            .then((response) => response.json())
            .then(res => { 
                console.log(res); 
                resolve(res) })
            .catch(err => reject(err))
    })
}
