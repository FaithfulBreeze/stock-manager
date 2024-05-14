const form_inputs = document.querySelectorAll('input')
const _id = window.location.href.split('/')[3]
const submit_form = document.querySelector('#submit_form')
submit_form.addEventListener('click', e =>{
    e.preventDefault()
    const body = {}
    form_inputs.forEach(input =>{
        if(input.name && input.name != '_id') body[input.name] = input.value
    })
    fetch(`https://18.191.56.16:3030/api/updateProduct?id=${_id}`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).finally(window.location = '/')
})