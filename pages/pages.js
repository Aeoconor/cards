
document.addEventListener("DOMContentLoaded", function() {
    // select all desc-col elements
    const descColList = document.querySelectorAll(".desc-col")
    const sidebarElement = document.getElementById("sidenav")
    console.log(sidebarElement)
    var counter = 1;
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
    })

    // image click to open in new tab
    $('img').click(function(e){
        var img = $(e.target);
        var src = img.attr("src");
        if (e.target.className != 'home-logo') {
            window.open(src);
        }
    });

});