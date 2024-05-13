const stock_form_input = document.querySelector('#stock_form')
const io_input = document.querySelector('#io')
const addButton = document.querySelector('#add')
const rmvButton = document.querySelector('#rmv')

addButton.addEventListener('click', (e) =>{
    e.preventDefault()
    stock_form_input.value = Number(stock_form_input.value) + Number(io_input.value)
})

rmvButton.addEventListener('click', (e) =>{
    e.preventDefault()
    stock_form_input.value = Number(stock_form_input.value) - Number(io_input.value)
})