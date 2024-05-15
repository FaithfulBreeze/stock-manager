const delete_button = document.querySelector('#delete_button')
delete_button.addEventListener('click', (e) =>{
    e.preventDefault()
    fetch(`${window.location.href.split(':')[0]+':'+window.location.href.split(':')[1]}:3030/api/deleteProduct?id=${window.location.href.split('id=')[1]}`, {
        method: 'DELETE'
    })
    .finally(window.location = '/')
})
