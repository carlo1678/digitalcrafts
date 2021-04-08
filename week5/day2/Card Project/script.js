const grabCardContainer = document.querySelector(".cardContainer")
const grabBookContainer = document.querySelector(".bookContainer")
const fetchPeopleData = async () => {
    if (grabCardContainer.length != 0 && grabBookContainer.length != 0) {
        grabCardContainer.innerHTML = ""
        grabBookContainer.innerHTML = ""
    }
    let response = await fetch("https://fakerapi.it/api/v1/persons?_quantity=30&_gender=male&_birthday_start=2005-01-01")
    let json = await response.json()
    let counter = 1
    for (let people of json.data) {
        console.log(people)
        const grabCards = document.querySelector(".cardContainer")
        const peopleContainer = document.createElement("div")
        peopleContainer.className = "peopleHolder"
        const name = document.createElement("h3")
        const email = document.createElement("h5")
        const img = document.createElement("img")
        img.height = "80"
        img.width = "140"
        img.src = `http://placeimg.com/640/480/people/${counter}`
        name.innerHTML = json.data[counter]["firstname"] + " " + json.data[counter]["lastname"]
        email.innerHTML = json.data[counter]["email"]
        peopleContainer.append(img, name, email)
        grabCards.append(peopleContainer)
        counter += 1

    }
    return json
}

const fetchBookData = async () => {
    if (grabBookContainer.length != 0 && grabCardContainer.length != 0) {
        grabBookContainer.innerHTML = ""
        grabCardContainer.innerHTML = ""
    }
    let response = await fetch("https://fakerapi.it/api/v1/books?_quantity=30")
    let json = await response.json()
    let counter = 1
    for (let books of json.data) {
        console.log(books)
        const grabBooks = document.querySelector(".bookContainer")
        const bookContainer = document.createElement("div")
        bookContainer.className = "bookHolder"
        const bookTitle = document.createElement("h3")
        const bookAuthor = document.createElement("h5")
        const img = document.createElement("img")
        img.height = "80"
        img.width = "140"
        img.src = `http://placeimg.com/480/640/any${counter}`
        bookTitle.innerHTML = json.data[counter]["title"]
        bookAuthor.innerHTML = json.data[counter]["author"]
        bookContainer.append(img, bookTitle, bookAuthor)
        grabBooks.append(bookContainer)
        counter += 1
    }
    return json
}

const submit2 = document.querySelector("#booksButton")
submit2.addEventListener("click", function () {
    fetchBookData()
})

const submit = document.querySelector("#peopleButton")
submit.addEventListener("click", function () {
    fetchPeopleData()
})

const clear = document.querySelector("#clear")
clear.addEventListener("click", function () {
    location.reload()
})