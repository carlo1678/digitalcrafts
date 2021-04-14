

const apiPull = async (userInput) => {
    let response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${userInput}&api-key=5BRNX9snHaZ283VWQa3Cui2EWgzQqo5G`) 
    let json = await response.json()
    console.log(json.response.docs)
    return json
}







