
const tooltip = document.querySelector('#tooltip')


const container = document.querySelectorAll('.tooltip-hover ul')
const list = document.querySelectorAll('.tooltip-hover li')

list.forEach((el)=>{
    
    el.addEventListener('mousemove',function(event){
        tooltip.style.display = 'flex'

tooltip.querySelector('h4').innerText =event.target.innerText
        tooltip.style.top = event.pageY + 15
        tooltip.style.left = event.pageX + 15
    })


    
})





container.forEach((el)=>{
    el.addEventListener('mouseleave',function(event){
        tooltip.style.display = 'none'
    })

    el.addEventListener('mouseenter',function(event){
        tooltip.style.display = 'none'
    })
})


