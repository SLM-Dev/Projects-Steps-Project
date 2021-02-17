const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
// using querty selector all it brings them all in as a node list  which is similar to an array
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive =circles.length
    }
        // console.log(currentActive)
    update()
})


prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }
    
        // console.log(currentActive)
    update()

})


function update() {
    circles.forEach((circle, idx )  => {
        if(idx < currentActive) {
            circle.classList.add('active')
    } else {
        circle.classList.remove('active')
    }
})
    //  
    const actives = document.querySelectorAll('.active')
    // console.log(actives.length / circles.length)
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'

}