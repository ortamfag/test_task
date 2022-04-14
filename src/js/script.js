const body = document.querySelector('.body')
const firstSlide = document.querySelector('.first-slide')
const secondSlide = document.querySelector('.second-slide')
const st1 = document.querySelector('.st1-text')
const st2 = document.querySelector('.st2')
const st3 = document.querySelector('.st3')
const st4 = document.querySelector('.st4')
const st5 = document.querySelector('.st5')
const st6 = document.querySelector('.st6')
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
        st3.classList.add('st3-show')
        st4.classList.add('st4-show')
        st5.classList.add('st5-show')
        st6.classList.add('st6-show')
    }


    if (counter === 5) {
        firstSlide.classList.remove('first-slide-show')
        leftBeacon.classList.remove('left-beacon-show')
        st1.classList.remove('st1-text-show')
        secondSlide.classList.remove('second-slide-show')
        st2.classList.remove('st2-show')
        st3.classList.remove('st3-show')
        st4.classList.remove('st4-show')
        st5.classList.remove('st5-show')
        st6.classList.remove('st6-show')
    }  

    if (counter === 5) {
        counter = 0
    }
}