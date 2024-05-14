const delete_button = document.querySelector('#delete_button')
delete_button.addEventListener('click', (e) =>{
    e.preventDefault()
    fetch(`https://18.191.56.16:3030/api/deleteProduct?id=${window.location.href.split('/')[3]}`, {
        method: 'DELETE'
    })
    .finally(window.location = '/')
})