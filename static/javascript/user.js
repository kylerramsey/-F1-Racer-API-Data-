let standingsSearchForm = document.getElementById('standingsSearch')

standingsSearchForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let formData = new FormData(standingsSearchForm)

    let seasonId = formData.get('seasonId')

    let roundId = formData.get('roundId')

    fetch(`https://ergast.com/api/f1/${seasonId}/${roundId}/driverStandings.json`)
        .then((res) => res.json())
        .then((data) => displaySearchResult(data))
})

function displaySearchResult(standing) {
    let featuredstandingEl = document.getElementById('featured-standing')
    console.log(standing)

    // If the object is empty
    if (Object.values(standing).length == 0) {
        featuredstandingEl.innerHTML = '<p>No standings found.</p>'
        return
    }

    let standingHTML = `

    `

    for (let i = 0; i < 20; i++) {
        standingHTML += `
            <tr>
                <th scope="row">${standing['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][i]['position']}</th>
                <td>${standing['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][i]['Driver']['givenName']} ${standing['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][i]['Driver']['familyName']}</td>
                <td>${standing['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][i]['Driver']['nationality']}</td>
                <td>${standing['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][i]['Constructors'][0]['name']}</td>
                <td>${standing['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][i]['points']}</td>
            </tr>
        `
    }

    featuredstandingEl.innerHTML = standingHTML
}

