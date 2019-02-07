let cats = [{
    name: 'mr Snibbley',
    moods: ['happy', 'bitey', 'hiding'],
    tolerance: 3,
    moodImgs: ['./assets/fancy-cat.jpg', './assets/angry-cat.jpg', './assets/ran-away-cat.jpg'],
    pets: 0,
    moodIndex: 0,
    totalPets: 0
}, {
    name: 'Tom',
    moods: ['happy', 'punchy', 'hiding'],
    tolerance: 5,
    moodImgs: ['https://i.pinimg.com/originals/92/a6/2f/92a62f0221f58fe503a15fcb13f5c107.png', 'https://d2w9rnfcy7mm78.cloudfront.net/1074239/original_6062f9b67626611e1f0b14a8e1bf9059.png?1497401369', 'https://data.whicdn.com/images/304581024/large.jpg?t=1515030870'],
    pets: 0,
    moodIndex: 0,
    totalPets: 0
}]

let activeCatIndex = 0

function pet(petVal) {
    cats[activeCatIndex].pets += petVal
    cats[activeCatIndex].totalPets++
    if (cats[activeCatIndex].pets > cats[activeCatIndex].tolerance * 2) {
        cats[activeCatIndex].moodIndex = 2
    } else if (cats[activeCatIndex].pets > cats[activeCatIndex].tolerance) {
        cats[activeCatIndex].moodIndex = 1
    }
    draw()
}

function draw() {
    document.getElementById('name').innerText = cats[activeCatIndex].name
    document.getElementById('fancy-cat').src = cats[activeCatIndex].moodImgs[cats[activeCatIndex].moodIndex]
    document.getElementById('pets').innerText = cats[activeCatIndex].totalPets
    document.getElementById('mood').innerText = cats[activeCatIndex].moods[cats[activeCatIndex].moodIndex]
    if (cats[activeCatIndex].pets > cats[activeCatIndex].tolerance * 2) {
        document.querySelector('.btn-info').disabled = true
    }
}

function reset() {
    cats[activeCatIndex].pets = 0
    cats[activeCatIndex].moodIndex = 0
    document.querySelector('.btn-info').disabled = false
    draw()
}

function setActiveCat(index) {
    activeCatIndex = index
    draw()
}






// let winner = {
//     rock: ['scissors', 'lizard'],
//     paper: ['rock', 'spock'],
//     scissors: ['paper', 'lizard'],
//     lizard: ['spock', 'paper'],
//     spock: ['scissors', 'rock']
// }


// function winner(pChoice, cChoice) {
//     if (pChoice == cChoice) {
//         //tie
//     } else if (winner[pChoice].includes(cChoice)) {
//         //winner
//     } else {
//         //loser
//     }
// }