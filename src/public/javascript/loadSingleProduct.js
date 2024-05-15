const inputs = document.querySelectorAll('input')
const stock_input = document.querySelector('#stock_form')
const id = window.location.href.split('id=')[1]

fetch(`http://ec2-18-230-85-214.sa-east-1.compute.amazonaws.com:3030/api/loadSingleProduct?id=${id}`)
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
