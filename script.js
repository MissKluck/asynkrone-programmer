// Fetch resource over the network
const response =  await fetch("https://ghibliapi.vercel.app/films/")
const films = await response.json()

const listElement = document.getElementById("film-list")

for (const film of films) {
    console.log(film)

    // Create a new element
    const newElement = document.createElement("li")
    newElement.textContent = film.title

    // Add to document
    listElement.appendChild(newElement)
}


function ExamplePromise ( ) {
    const promise = new Promise ((resolve, reject) => {
        const chance = Math.random() > 0.5
     setTimeout(
            () => {resolve()},
            1000 // milliseconds
        )
 
    })
    return promise
}

await ExamplePromise()
console.log("promise resolved")