'use strict'



let box1 = document.querySelectorAll('#box1')
let linkICon = document.getElementById('linkICon')
let link = document.getElementById('ver')
let chewronICon = document.getElementById('chewronICon')

let bars = document.getElementById('bars')
let leftContent = document.getElementById('left')
let mark = document.getElementById('mark')
linkICon.addEventListener('click', e => {
    box1.forEach((box)=> {
        box.style.display = 'block'
    })

    link.innerHTML = `
    <a href="#" id="ver">Свернуть</a>
    `
    linkICon.style.display = 'none'
    chewronICon.style.display = 'block'
})

chewronICon.addEventListener('click' , e => {
    box1.forEach((box)=> {
        box.style.display = 'none'
    })
    link.innerHTML = `
    <a href="#" id="ver">Развернуть</a>
    `
    linkICon.style.display = 'block'
    chewronICon.style.display = 'none'
})


bars.addEventListener('click' , e => {
    leftContent.style.height = '100vh'
    leftContent.style.transition = '2s'
})
mark.addEventListener('click' , e => {
    leftContent.style.height = '0vh'
})


