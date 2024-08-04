// select all desc-col elements
const descColList = document.querySelectorAll(".desc-col")
descColList.forEach((element) => { // for each, add the custom ebay sold link
    combinedSetCard = element.lastElementChild.textContent.concat(" " + element.firstElementChild.textContent)
    searchableText = combinedSetCard.replaceAll(" ", "+")
    element.firstElementChild.href = `https://www.ebay.com/sch/i.html?_nkw=${searchableText}&LH_Sold=1&LH_Complete=1`
})

// image click to open in new tab
$('img').click(function(e){
    var img = $(e.target);
    var src = img.attr("src");
    if (e.target.className != 'home-logo') {
        window.open(src);
    }
});