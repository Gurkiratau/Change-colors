'use strict'

const button = document.querySelector('button');
const body = document.querySelector('body');

const color= ['red', 'pink','black','orange','neon','yellow']

body.style.backgroundColor= 'blue'


button.addEventListener('click', changeB);

function changeB(){

    const colorIndex= parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex]
}