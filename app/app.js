let cat = {
    name: 'mr Snibbley',
    moods: ['happy', 'bitey', 'hiding'],
    tolerance: 3,
    moodImgs: ['./assets/fancy-cat.jpg', './assets/angry-cat.jpg', './assets/ran-away-cat.jpg'],
    pets: 0,
    moodIndex: 0
}

function pet() {
    cat.pets++
    if (cat.pets > cat.tolerance * 2) {
        cat.moodIndex = 2
    } else if (cat.pets > cat.tolerance) {
        cat.moodIndex = 1
    }
    draw()
}

function draw() {
    document.getElementById('fancy-cat').src = cat.moodImgs[cat.moodIndex]
    document.getElementById('pets').innerText = cat.pets
    document.getElementById('mood').innerText = cat.moods[cat.moodIndex]

}