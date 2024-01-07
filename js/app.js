// RESONSIVE NAVBAR | CODE REFERENCED FROM WEB DEV SIMPLIFIED
//Getting hamburger menu and list element by class name
const hamburger_menu = document.getElementsByClassName('hamburger_button')[0]
const navbar_links = document.getElementsByClassName('navbar_links')[0]

//Toggle function to show nav_list
hamburger_menu.addEventListener('click', () => {
    navbar_links.classList.toggle('active')
})

// FOOTER COPY TO CLIPBOARD FUNCTION | CODE REFERENCED FROM W3SCHOOLS
function copyPhone() {
    let text = document.getElementById("copy-phone").innerHTML;
    navigator.clipboard.writeText(text);

    var tooltip = document.getElementsByClassName("tooltiptext")[0]
    tooltip.innerHTML = "Copied";
}

function copyEmail() {
    let text = document.getElementById("copy-email").innerHTML;
    navigator.clipboard.writeText(text);

    var tooltip = document.getElementsByClassName("tooltiptext")[1]
    tooltip.innerHTML = "Copied";
}

function reTooltip() {
    var tooltip = document.getElementsByClassName("tooltiptext");
    console.log(tooltip[0])

    for (var i = 0; i < tooltip.length; i++) {
        tooltip[i].innerHTML = "Copy";
    }
}

// Initialize and add the map
function initMap() {
    // The location of business
    const loc = { lat: -25.344, lng: 131.031 };
    // The map, centered at business
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: loc,
    });
    // The marker, positioned at business
    const marker = new google.maps.Marker({
    position: loc,
    map: map,
    });
}

window.initMap = initMap;