const body = document.querySelector('.body')
const firstSlide = document.querySelector('.first-slide')
const secondSlide = document.querySelector('.second-slide')
const st1 = document.querySelector('.st1-text')
const st2 = document.querySelector('.st2')
const leftBeacon = document.querySelector('#left-beacon')

var counter = 0

function Slides(){
    ++counter
    console.log(counter)

    if (counter === 1) {
        firstSlide.classList.add('first-slide-show')
    }  
    
    if (counter === 1) {
        leftBeacon.classList.add('left-beacon-show')
        st1.classList.add('st1-text-show')
        secondSlide.classList.add('second-slide-show')
        st2.classList.add('st2-show')
    }


    if (counter === 5) {
        firstSlide.classList.remove('first-slide-show')
    }  

    if (counter === 5) {
        counter = 0
    }
}