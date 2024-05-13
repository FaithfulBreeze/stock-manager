const form_inputs = document.querySelectorAll('input')
const _id = window.location.href.split('/')[3]
const submit_form = document.querySelector('#submit_form')
submit_form.addEventListener('click', e =>{
    e.preventDefault()
    const body = {}
    form_inputs.forEach(input =>{
        if(input.name && input.name != '_id') body[input.name] = input.value
    })
    fetch(`https://glorious-broccoli-6xvvgwpgqwqhx6g6-3030.app.github.dev/api/updateProduct?id=${_id}`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).finally(window.location = '/')
})