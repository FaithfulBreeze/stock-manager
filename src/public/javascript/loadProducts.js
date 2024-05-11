const table = document.querySelector('tbody')
let page = 0
let maximumPage

function loadProducts(index){
    if(index){
        if(index < 0) page = (page == 0) ? 0 : page + index
        if(index > 0) page = (page == maximumPage) ? maximumPage : page + index
    }
    table.innerHTML = `<tr id="t_header"></tr>`
    const tableHeader = document.querySelector('#t_header')
    fetch(`https://glorious-broccoli-6xvvgwpgqwqhx6g6-3030.app.github.dev/api/loadProducts?page=${page}`)
    .then(response =>{
        const maximumPage = response.headers.get("maximum-page")
        getMaximumPage(maximumPage)
        return response.json()
    })
    .then(data => {
            for(property in data[0]){
                const th = document.createElement('th')
                th.innerText = property
                tableHeader.appendChild(th)
        }
        data.forEach(product => {
            const tr = document.createElement('tr')
            if(product.product_onWarning == true) tr.classList += "onWarning"
            for(property in product){
                const td = document.createElement('td')
                td.innerText = product[property]
                tr.appendChild(td)
            }
            table.appendChild(tr)
        })
    })    
}

function getMaximumPage(maximumPageParam){
    maximumPage = Number(maximumPageParam)
}
