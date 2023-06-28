let buttons = document.querySelectorAll('.button')
let display = document.querySelector('.output')
let ball1 = document.querySelector('.ball1')
let ball3 = document.querySelector('.ball3')
let ball = document.querySelector('.ball')
let body = document.querySelector('main')
let rese = document.querySelector('.reset')
let equal = document.querySelector('.equal')
let dels = document.querySelector('.del')
let back = document.querySelector('.buttons')
let toggle = document.querySelector('.toggle-button')
buttons.forEach(buttons1=>{
    buttons1.addEventListener('click',()=>{
        display.textContent += buttons1.textContent
    })
})
        function calc(){
           display.textContent = eval(display.textContent)
        }
        function reset(){
            display.textContent = ''
         }
         function del(){
            display.textContent = display.textContent.toString().slice(0,-1)
         }
ball1.addEventListener('click',()=>{
    body.style.background = 'hsl(225, 21%, 49%)'
    ball1.style.background = 'var(--Orange)'
    ball.style.background = 'transparent'
    ball1.style.background = 'hsl(6, 63%, 50%)'
    equal.style.background = 'hsl(6, 63%, 50%)'
    back.style.background = 'hsl(222, 26%, 31%)'
    dels.style.background = 'hsl(225, 21%, 49%)'
    rese.style.background = 'hsl(225, 21%, 49%)'
    ball3.style.background = ' transparent'

    document.querySelector('.result').style.background = 'hsl(222, 26%, 31%)'
    document.querySelector('.result').style.color='white'
    toggle.style.background = 'hsl(222, 26%, 31%)'
    document.body.style.color = 'black'
    buttons.forEach(buttons1=>{
        buttons1.style.background = 'var(--Very-light-gray)'
       })
       buttons.forEach(buttons1=>{
        buttons1.style.color = 'black'
       })
       buttons.forEach(buttons1=>{
        buttons1.style.borderColor = 'gray'
       })
})

ball.addEventListener('click',()=>{
    body.style.background = 'var(--Light-gray)'
    ball.style.background = 'var(--Orange)'
    back.style.background = 'var(--Grayish-red)'
    ball1.style.background = 'transparent'
    equal.style.background = 'var(--Orange)'
    dels.style.background = 'var(--Dark-moderate-cyan)'
    rese.style.background = 'var(--Dark-moderate-cyan)'
    ball.style.background = 'var(--Orange)'
    ball3.style.background = 'transparent'
    toggle.style.background = 'var(--Grayish-red)'
    document.querySelector('.result').style.background = 'var(--Very-light-gray)'
    document.querySelector('.result').style.color='black'
    document.body.style.color = 'black'
    buttons.forEach(buttons1=>{
        buttons1.style.background = 'var(--Very-light-gray)'
       })
       buttons.forEach(buttons1=>{
        buttons1.style.color = 'black'
       })
       buttons.forEach(buttons1=>{
        buttons1.style.borderColor = 'gray'
       })
})

ball3.addEventListener('click',()=>{
    body.style.background = 'hsl(268, 75%, 9%)'
    ball.style.background = 'transparent'
    back.style.background = 'hsl(268, 71%, 12%)'
    ball1.style.background = 'transparent'
    equal.style.background = ' hsl(176, 100%, 44%)'
    ball3.style.background = ' hsl(176, 100%, 44%)'
    dels.style.background = 'hsl(281, 89%, 26%)'
    rese.style.background = 'hsl(285, 91%, 52%)'
    ball.style.background = 'transparent'
    toggle.style.background = 'hsl(268, 71%, 12%)'
    document.querySelector('.result').style.background = 'hsl(268, 71%, 12%)'
    document.querySelector('.result').style.color='hsl(52, 100%, 62%)'
    document.body.style.color = 'yellow'
   buttons.forEach(buttons1=>{
    buttons1.style.background = 'hsl(268, 75%, 9%)'
   })
   buttons.forEach(buttons1=>{
    buttons1.style.color = 'hsl(52, 100%, 62%)'
   })
   buttons.forEach(buttons1=>{
    buttons1.style.borderColor = 'hsl(285, 91%, 52%)'
   })

})