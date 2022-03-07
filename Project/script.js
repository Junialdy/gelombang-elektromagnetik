const open1 = document.getElementById('open1')
const open2 = document.getElementById('open2')
const open3 = document.getElementById('open3')
const open4 = document.getElementById('open4')
const open5 = document.getElementById('open5')
const open6 = document.getElementById('open6')
const open7 = document.getElementById('open7')
const slide1 = document.getElementById('slide1')
const slide2 = document.getElementById('slide2')
const slide3 = document.getElementById('slide3')
const slide4 = document.getElementById('slide4')
const slide5 = document.getElementById('slide5')
const slide6 = document.getElementById('slide6')
const slide7 = document.getElementById('slide7')
const overlay = document.getElementById('overlay')
const slider = document.getElementById('slider')
const close = document.getElementById('close')
const controls = document.getElementById('controls')

open1.addEventListener('click', () => {
    addChecked(slide1)
    slider.classList.add('active')
    overlay.classList.add('active')
        
    
    
})

open2.addEventListener('click', () => {
    addChecked(slide2)
    slider.classList.add('active')
    overlay.classList.add('active')
        
    
})

open3.addEventListener('click', () => {
    addChecked(slide3)
    slider.classList.add('active')
    overlay.classList.add('active')
        
    
})

open4.addEventListener('click', () => {
    addChecked(slide4)
    slider.classList.add('active')
    overlay.classList.add('active')
        
    
})
open5.addEventListener('click', () => {
    addChecked(slide5)
    slider.classList.add('active')
    overlay.classList.add('active')
        
    
})
open6.addEventListener('click', () => {
    addChecked(slide6)
    slider.classList.add('active')
    overlay.classList.add('active')
        
    
})

open7.addEventListener('click', () => {
    addChecked(slide7)
    slider.classList.add('active')
    overlay.classList.add('active')
        
    
})


close.addEventListener('click', () => {
    deleteChecked(slide1)
    deleteChecked(slide2)
    deleteChecked(slide3)
    deleteChecked(slide4)
    deleteChecked(slide5)
    deleteChecked(slide6)
    deleteChecked(slide7)
    slider.classList.remove('active')
    overlay.classList.remove('active')
})

function addChecked(slide){
    const slider = document.getElementById(slide)
    const checked = document.createAttribute("checked");

    slide.setAttributeNode(checked);
}

function deleteChecked(slide){
    slide.removeAttribute("checked");
}


