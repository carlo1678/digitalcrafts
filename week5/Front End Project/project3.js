const userInput = document.querySelector(".searchInput")
const apiPull = async () => {
    let response = await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${userInput.value}&api-key=5BRNX9snHaZ283VWQa3Cui2EWgzQqo5G`) 
    let json = await response.json()
    let authorResponse = json.results
    let counter = 1
    for (author of authorResponse) {
        if (counter > 9) break
        const grabCardBody = document.querySelector(`.card-body${counter}`)
        grabCardBody.addEventListener("click", function(){
            location.href = author.url
        })
        const grabCardTitle = document.querySelector(`.card-title${counter}`)
        grabCardTitle.innerText = author.book_title 
        const grabCardAuthor = document.querySelector(`.card-author${counter}`)
        grabCardAuthor.innerText = author.book_author
        const grabCardSummary = document.querySelector(`.card-summary${counter}`)
        grabCardSummary.innerText = author.summary
        counter += 1
        console.log(author)
    }
    return json
    
}
const grabInput = document.querySelector(".searchButton")
grabInput.addEventListener("click", () => apiPull())
