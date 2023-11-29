const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

next.addEventListener('click', ()=>{
    if(currentActive < circles.length){
        currentActive++;
    }
    updateDom()
})

prev.addEventListener('click', ()=>{
    if(currentActive>1){
        currentActive--;
    }
    updateDom()
})

const updateDom = () => {
    circles.forEach((circle, index)=>{
        if(index<currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    
    const ratio = `${((currentActive -1)/(circles.length-1)) * 100}%`
    progress.style.width = ratio;
    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive===circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false
        next.disabled = false;
    }
  
}