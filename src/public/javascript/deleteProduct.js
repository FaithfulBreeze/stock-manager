const delete_button = document.querySelector('#delete_button')
delete_button.addEventListener('click', (e) =>{
    e.preventDefault()
    fetch(`http://ec2-18-230-85-214.sa-east-1.compute.amazonaws.com:3030/api/deleteProduct?id=${window.location.href.split('id=')[1]}`, {
        method: 'DELETE'
    })
    .finally(window.location = '/')
})
