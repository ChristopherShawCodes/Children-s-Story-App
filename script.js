const sounds = ['ramayana','un-golden fish','greedy bear','jubilee elephant']
const touch = document.querySelector('.touch')
const buttons = document.getElementById('buttons')
const instructions = document.querySelector('.instructions')
const audio = document.querySelector('.audio')
const stringsArray = [ 'This is an demo site built by Christopher Shaw ', 'Below are four short stories.', 'Click on a button to start a story.', 'Enjoy !'];




let index = 0;


instructions.addEventListener('click', (event) => {
    if (index >= 4) {
    index = 4
}   
event.target.textContent = stringsArray[index]
index++
touch.style.display = 'none'
instructions.style.margin = '0 auto'
})



sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
    btn.addEventListener('click',()=>{
        stopSongs()
        white()
        document.getElementById(sound).controls = true
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound =>{
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}

function white() {
    buttons.classList.add('white')
}