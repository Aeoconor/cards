// Handle dropdown selections
function goToNewPage()
{
    console.log(document.getElementById("categoriesDropdown").value)
    if (document.getElementById("categoriesDropdown").value != 'none') {
        window.location = document.getElementById("categoriesDropdown").value
    }
}
const selectDropdown = document.getElementById("categoriesDropdown");
selectDropdown.addEventListener('change', goToNewPage);