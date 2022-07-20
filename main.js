fetch('./people.json')
    .then((res) => res.json())
    .then((responseData) => displayPeople(responseData.data))

let peopleEl = document.getElementById('people')

function displayPeople(data) {

    for (let person of data) {
        //let newPersonNode = `<div></div>`;
        let newPersonNode = document.createElement('div')
        newPersonNode.classList.add('card', 'mb-2')

        newPersonNode.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${person.name}</h2>
                <p class="card-text">${person.title}</p>
            </div>
        `

        newPersonNode.addEventListener('click', (event) => {
            displayFeaturedPerson(person)
        })



        // peopleEl.innerHTML += newPersonNode
        peopleEl.appendChild(newPersonNode)
    }


/*     let peopleHTML = ''

    displayFeaturedPerson(data[2])

    for (let person of data) {
        peopleHTML += `
            <div class="card mb-2">
                <div class="card-body">
                    <h2 class="card-title">${person.name}</h2>
                    <p class="card-text">${person.title}</p>
                </div>
            </div>
        `
    }

    peopleEl.innerHTML = peopleHTML

    let peopleEls = document.querySelectorAll('#people .card')
    
    for (let i = 0; i < peopleEls.length; i++) {
        peopleEls[i].addEventListener('click', (event) => {
            let personInfo = data[i]
            displayFeaturedPerson(personInfo)
        })
    } */
}

function displayFeaturedPerson(person) {
    let featuredPersonEl = document.getElementById('featured-person')

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