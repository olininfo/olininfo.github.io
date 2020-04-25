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

    // If the pushState has previously happened and the back button is clicked, hide any modals.
    $(window).on('popstate', function () {
        if (urlReplace !== "") {
            urlReplace = "";
            $(".modal").modal('hide');
        }
    });

    if (window.location.hash !== "") {
        for (let i = 0; i < modals.length; i++) {
            if ("#" + modals[i].id === window.location.hash) {
                $(window.location.hash).modal('show');
                break;
            }
        }
    }
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(function(registration) {
                console.log('Registration successful, scope is:', registration.scope);
            })
            .catch(function(error) {
                console.log('Service worker registration failed, error:', error);
            });
    }
});


let keywords = {
    "dining": "dining hall olin trim wellesley babson dinner lunch breakfast brunch hours menus restaurant Lulu Chow Wang Campus Center food drink",
    "calendar": "calendars events events academic schedules",
    "flyolinfly": "fly flights airport ride carpool transportation",
    "printing": "print printing printers",
    "laundry": "laundry machines washer dryer status",
    "transportation": "BOW Babson Wellesley Olin shuttle transportation get off campus pop bubble shuttle boston cars parking permit olin whose borrow go bikes bicycles",
    "it": "it wiki wifi ubuntu matlab linux windows reset password android phone ios solidworks",
    "coursesReqs": "Degree course graduate graduation major concentration requirements planner planning templates ahs humanities arts BOW Babson Wellesley Olin Brandeis Cross course browser registration catalogs student handbooks coloring",
    "onecard": "one card blackboard onecard money laundry recharge refill",
    "libraries": "BOW Babson Wellesley Olin Library Libraries help writing ta ninja",
    "tools": "tools machines shop training lab equipment",
    "sgconstitution": "SG constitution student government",
    "mailing": "mailing lists carpediem helpme email",
    "forms": "forms requests star oss reimbursement spending Self Study Requirement work order passionate pursuit proposal Independent Research ISRG ISR-G ECE stockroom parts direct deposit bikes bicycle registration timesheet pay",
    "adastra": "ad astra booking rooms reserve reservation",
    "babsonhealth": "Babson Health Services colony care wellness mental",
    "club": "Committee Clubs Organizations Orgs Acronym aero badminton board climbing cardistry DnD D&D Dungeons Dragons outing puzzle soft robotics formula baja oars core cco serv slac frisbee rocket Phoenix aquatic",
    "feedback": "tiles site feedback",
    "jobs": "fellowship sketch model pint summer 2020 jobs opportunities opportunity",
    "eGameDatabase": "play online board games database gaming connect"
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
        // Loop through all list items, and hide those that don't match the search query
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
