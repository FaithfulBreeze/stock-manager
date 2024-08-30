const form_inputs = document.querySelectorAll('input')
const _id = window.location.href.split('id=')[1]
const submit_form = document.querySelector('#submit_form')
submit_form.addEventListener('click', e =>{
    e.preventDefault()
    const body = {}
    form_inputs.forEach(input =>{
        if(input.name && input.name != '_id') body[input.name] = input.value
    })
    fetch(`/api/updateProduct?id=${_id}`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).finally(window.location = '/')
})
