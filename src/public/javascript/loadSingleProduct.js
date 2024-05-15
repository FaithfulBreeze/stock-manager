const inputs = document.querySelectorAll('input')
const stock_input = document.querySelector('#stock_form')
const id = window.location.href.split('id=')[1]

fetch(`${window.location.href.split(':')[0]+':'+window.location.href.split(':')[1]}:3030/api/loadSingleProduct?id=${id}`)
.then(response => response.json())
.then(product =>{
    let i = 0
    for(property in product){
        if(property == 'stock'){
            stock_input.value = product[property]
        }
        else{
            const input = inputs[i]
            input.value = product[property]
            i++
        }
    }
})
