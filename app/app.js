let cat = {
    name: 'mr Snibbley',
    moods: ['happy', 'bitey', 'hiding'],
    tolerance: 3,
    moodImgs: ['./assets/fancy-cat.jpg', './assets/angry-cat.jpg', './assets/ran-away-cat.jpg'],
    pets: 0,
    moodIndex: 0,
    totalPets: 0
}

function pet() {
    cat.pets++
    cat.totalPets++
    if (cat.pets > cat.tolerance * 2) {
        cat.moodIndex = 2
    } else if (cat.pets > cat.tolerance) {
        cat.moodIndex = 1
    }
    draw()
}

function draw() {
    document.getElementById('fancy-cat').src = cat.moodImgs[cat.moodIndex]
    document.getElementById('pets').innerText = cat.totalPets
    document.getElementById('mood').innerText = cat.moods[cat.moodIndex]
    if (cat.pets > cat.tolerance * 2) {
        document.querySelector('.btn-info').disabled = true
    }
}

function reset() {
    cat.pets = 0
    cat.moodIndex = 0
    document.querySelector('.btn-info').disabled = false
    draw()
}