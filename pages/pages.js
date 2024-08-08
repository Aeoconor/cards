
document.addEventListener("DOMContentLoaded", function() {
    // select all desc-col elements
    const descColList = document.querySelectorAll(".desc-col")
    const sidebarElement = document.getElementById("sidenav")
    const topFilterBar = document.getElementById("setFilterBar")
    var counter = 1;
    var appendedSets = []
    descColList.forEach((element) => {
        // for each, add the custom ebay sold link
        combinedSetCard = element.lastElementChild.textContent.concat(" " + element.firstElementChild.textContent)
        searchableText = combinedSetCard.replaceAll(" ", "+")
        element.firstElementChild.href = `https://www.ebay.com/sch/i.html?_nkw=${searchableText}&LH_Sold=1&LH_Complete=1`
        element.firstElementChild.id = `link${counter}`

        // sidebar building
        var div = document.createElement('div')
        sidebarElement.appendChild(div)
        div.setAttribute('class', 'sidebarDiv')
        div.textContent = element.firstElementChild.textContent
        div.addEventListener('click', () => {
            document.getElementById(element.firstElementChild.id).scrollIntoView({behavior: 'smooth'});
        })
        counter++

        // top dropdown options
        var optionElement = document.createElement('option')
        optionElement.value = element.lastElementChild.textContent
        optionElement.textContent = element.lastElementChild.textContent
        if (!appendedSets.includes(optionElement.textContent)){
            topFilterBar.firstElementChild.appendChild(optionElement)
        }
        appendedSets.push(element.lastElementChild.textContent)
    })

    // handle set filtering
    const topFilterSubmit = document.getElementById("setFilterSubmit")
    topFilterSubmit.addEventListener('click', () => {
        var filterValue = topFilterBar.firstElementChild.value
        descColList.forEach((element) => {
            if (element.lastElementChild.textContent == filterValue || filterValue == 'any') {
                element.parentElement.style.display = 'flex'
            }
            if (element.lastElementChild.textContent != filterValue && filterValue != 'any') {
                element.parentElement.style.display = 'none'
            }
        })
    })

    // image click to open in new tab
    $('img').click(function(e){
        var img = $(e.target);
        var src = img.attr("src");
        if (e.target.className != 'home-logo') {
            window.open(src);
        }
    });

    // handle search bar
    const cardSearchElement = document.getElementById("card-search")
    cardSearchElement.addEventListener('input', () => {
        const sideBarDivs = document.querySelectorAll(".sidebarDiv")
        const imgDescRows = document.querySelectorAll(".image-desc-row")
        const regx = new RegExp(`^${cardSearchElement.value.toUpperCase()}`)
        sideBarDivs.forEach((element) => {
            if (regx.test(element.textContent.toUpperCase())) {
                element.style.display = 'block'
            } else {
                element.style.display = 'none'
            }
        })
        imgDescRows.forEach((element) => {
            if (regx.test(element.lastElementChild.firstElementChild.textContent.toUpperCase())) {
                element.style.display = 'flex'
            } else {
                element.style.display = 'none'
            }
        })
    })

});