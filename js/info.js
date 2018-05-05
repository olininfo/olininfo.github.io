$(document).ready(function () {
    var urlReplace = "";
    let modals = $(".modal");
    modals.on("shown.bs.modal", function () { // any time a modal is shown
        urlReplace = "#" + $(this).attr('id'); // make the hash the id of the modal shown
        history.pushState(null, null, urlReplace); // push state that hash into the url
    }).on("hidden.bs.modal", function () { // any time a modal is hidden
        if (urlReplace !== "") {
            urlReplace = "";
            history.back(); // pop state that hash into the url
        }
    });

    // If a pushstate has previously happened and the back button is clicked, hide any modals.
    $(window).on('popstate', function () {
        if (urlReplace !== "") {
            urlReplace = "";
            $(".modal").modal('hide');
        }
    });

    if (window.location.hash !== "") {
        for (var i = 0; i < modals.length; i++) {
            if ("#" + modals[i].id === window.location.hash) {
                $(window.location.hash).modal('show');
                break;
            }
        }
    }
});


let keywords = {
    "dining": "dining hall olin menu food drink",
    "trim": "trim babson menu food drink",
    "calendar": "calendar event academic",
    "printing": "printing printers",
    "laundry": "laundry",
    "shuttle": "BOW Babson Wellesley Olin shuttle",
    "it": "it wiki wifi ubuntu matlab linux windows password",
    "course_browser": "BOW Babson Wellesley Olin Cross course browser registration",
    "onecard": "one card blackboard onecard",
    "libraries": "BOW Babson Wellesley Olin Library Libraries",
    "tools": "tools machine shop",
    "degree_reqs": "Degree requirements",
    "sgconstitution": "SG constitution student government",
    "offcampus": "get off campus pop the bubble shuttle boston",
    "mailing": "mailing lists carpediem",
    "forms": "star oss reimbursement forms Self Study Requirement work order",
    "adastra": "ad astra booking rooms reserve reservation",
    "babsonhealth": "Babson Health Services",
    "club": "Committee for Clubs and Organizations Acronym aero badminton board climbing cardistry DnD D&D Dungeons Dragons outing puzzle soft robotics formula baja oars core cco serv slac frisbee rocket Phoenix aquatic",
    "feedback": "tiles site feedback"
};

function searchFunction() {
    let inputs = document.getElementById('searchBar').value.toLowerCase().trim();
    let tiles = document.getElementsByClassName('tile');
    if (!inputs) {
        // Show all tiles
        for (let tile of tiles)
            tile.style.display = "";
    } else {
        inputs = inputs.split(" ");
        // Loop through all list items, and hide those who don't match the search query
        for (let tile of tiles) {
            if (!keywords[tile.id])
                continue;

            let keyword = keywords[tile.id].toLowerCase();
            let show = false;
            for (let j = 0; j < inputs.length; j++) {
                if (keyword.includes(inputs[j]) && inputs[j]) {
                    show = true;
                    break;
                }
            }
            tile.style.display = show ? "" : "none";
        }
    }
}