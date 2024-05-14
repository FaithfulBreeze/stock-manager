const delete_button = document.querySelector('#delete_button')
delete_button.addEventListener('click', (e) =>{
    e.preventDefault()
    fetch(`https://52.67.163.103:3030/api/deleteProduct?id=${window.location.href.split('/')[3]}`, {
        method: 'DELETE'
    })
    .finally(window.location = '/')
})