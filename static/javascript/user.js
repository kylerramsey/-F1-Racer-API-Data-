let userSearchForm = document.getElementById('userSearch')

userSearchForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let formData = new FormData(userSearchForm)

    let userId = formData.get('userId')

    fetch(`https://my-json-server.typicode.com/Llang8/javascript-day3-june-2022/users/${userId}`)
        .then((res) => res.json())
        .then((data) => displaySearchResult(data))
})

function displaySearchResult(person) {
    let featuredPersonEl = document.getElementById('featured-person')
    console.log(person)

    // If the object is empty
    if (Object.values(person).length == 0) {
        featuredPersonEl.innerHTML = '<p>The user was not found.</p>'
        return false
    }

    let skillsHTML = ''

    for (let skill in person.skills) {
        skillsHTML += `
            <li>${skill}: ${person.skills[skill]}</li>
        `
    }

    let personHTML = `
        <h2>${person.name}</h2>
        <p>Title: ${person.title}</p>
        <h3>Skills:</h3>
        <ul>
            ${skillsHTML}
        </ul>
    `

    featuredPersonEl.innerHTML = personHTML
}