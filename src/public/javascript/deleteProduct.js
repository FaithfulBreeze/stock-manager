const delete_button = document.querySelector('#delete_button')
delete_button.addEventListener('click', (e) =>{
    e.preventDefault()
    fetch(`https://glorious-broccoli-6xvvgwpgqwqhx6g6-3030.app.github.dev/api/deleteProduct?id=${window.location.href.split('/')[3]}`, {
        method: 'DELETE'
    })
    .finally(window.location = '/')
})