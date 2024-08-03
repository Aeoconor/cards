// Handle dropdown selections
if(performance.navigation.type == 2){
    location.reload(true);
 }
function goToNewPage()
{
    if (document.getElementById("categoriesDropdown").value != 'none') {
        if (document.getElementById("categoriesDropdown").value != 'Categories') {
            window.location = document.getElementById("categoriesDropdown").value
        }
    }
}
const selectDropdown = document.getElementById("categoriesDropdown");
selectDropdown.addEventListener('change', goToNewPage);