const menu= document.querySelector('.menu-items')
console.log(menu)

// go get me some food from API

fetch('https://codice-boca.web.app/menu')
.then(myrespond => myrespond.json())
.then(data => {
    let html = ''

    data.forEach(eachItem => {
    let htmlItem = `<div class="menu-items__item">
    <h3>${eachItem.title}</h3>
    <p>${eachItem.description}</p>
    </div>`   
    console.log('eachItem =>', eachItem) 
    
    html += htmlItem
    })
    menu.innerHTML = html
  
})  
 
.catch(err => console.error(err))
