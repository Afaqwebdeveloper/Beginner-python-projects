var head_1=document.querySelector('#one')
var head_2=document.querySelector('#Two')
var head_3=document.querySelector('#Three')

head_1.addEventListener('mouseover',function(){
    head_1.textContent="Mouse Currently Over Me";
    head_1.style.color='red'

})


head_1.addEventListener('mouseout',function(){
    head_1.textContent="Hover Over Me";
    head_1.style.color='black'

})

head_2.addEventListener('click',function(){
    head_2.textContent="Clicked On";
    head_2.style.color='red'

})

head_3.addEventListener('dblclick',function(){
    head_3.textContent="Double Clicked";
    head_3.style.color='red'

})