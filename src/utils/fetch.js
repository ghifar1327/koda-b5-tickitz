async function fetchUrl(url, option = {}) {
    const response = await fetch(url, option)
    if(!response.ok){
        throw new Error(`${response.status}, ${response.statusText}`)
    }
    return response.json()
}

export default fetchUrl