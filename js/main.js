'use strict'


let bars = document.getElementById('bars')
let leftContent = document.getElementById('left')
let mark = document.getElementById('mark')

bars.addEventListener('click' , e => {
    leftContent.style.height = '100vh'
    leftContent.style.transition = '2s'
})

mark.addEventListener('click' , e => {
    leftContent.style.height = '0vh'
})