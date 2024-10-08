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
    fetch(`/api/loadProducts?page=${page}`)
    .then(response =>{
        console.log(response)
        const maximumPage = response.headers.get("maximum-page")
        getMaximumPage(maximumPage)
        return response.json()
    })
    .then(data => {
            if(data.length == 0) return table.innerHTML = `<h3>No products yet</h3>`
            for(property in data[0]){
                const th = document.createElement('th')
                th.innerText = property
                tableHeader.appendChild(th)
        }
        data.forEach(product => {
            const tr = document.createElement('tr')
            if(product.onWarning == true) tr.classList = "onWarning"
            if(product.available == false) tr.classList = "notAvailable"
            for(property in product){
                const td = document.createElement('td')
                if(property == "_id"){
                    const a = document.createElement('a')
                    a.href = `id=${product[property]}`
                    a.innerText = product[property]
                    td.appendChild(a)
                }else td.innerText = product[property]
                tr.appendChild(td)
            }
            table.appendChild(tr)
        })
    })    
}

function getMaximumPage(maximumPageParam){
    maximumPage = Math.trunc(maximumPageParam/10)
}
