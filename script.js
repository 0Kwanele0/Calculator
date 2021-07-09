
const Btns = document.querySelectorAll(".number")
const answer = document.querySelector(".answer")
const calculation = document.querySelector(".calculation")
const resert = document.querySelector(".resert")
const equal = document.querySelector(".equal")
const operators = document.querySelectorAll('.operators')
const cancel = document.querySelector(".cancel")

Btns.forEach(item=> {
    item.addEventListener('click', event=>{
        var theNumber = parseInt(item.textContent)
        answer.textContent += theNumber
    })  
})


resert.addEventListener('click', ()=>{
    answer.textContent = ''
    calculation.textContent = ''
})


operators.forEach(itemo =>{
    itemo.addEventListener('click', e=>{
        if (answer.textContent !== '')
            answer.textContent += itemo.textContent
    })
})


equal.addEventListener('click', ()=>{
    calculation.textContent = answer.textContent
    answer.textContent =  eval(answer.textContent)
})


cancel.addEventListener('click', ()=>{
    if (answer.textContent){
        const sliced = answer.textContent.slice(0, -1)
        answer.textContent = sliced

    }
})