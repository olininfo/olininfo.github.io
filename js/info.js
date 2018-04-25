urlReplace = "";
$(".modal").on("shown.bs.modal", function () { // any time a modal is shown
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

let keywords = {
    "dining": "dining hall olin menu",
    "trim": "trim babson menu",
    "calendar": "calendar event",
    "printing": "printing printer",
    "laundry": "laundry",
    "shuttle": "BOW Babson Wellesley Olin shuttle",
    "it": "it wiki wifi ubuntu matlab linux windows",
    "course_browser": "BOW Babson Wellesley Olin Cross course browser registration",
    "onecard": "one card blackboard",
    "libraries": "BOW Babson Wellesley Olin Library Libraries",
    "tools": "tools machine shop",
    "degree_reqs": "Degree requirements",
    "sgconstitution": "SG constitution student government",
    "offcampus": "get off campus pop the bubble shuttle boston",
    "mailing": "mailing lists",
    "forms": "star oss reimbursement forms Self Study Requirement work order",
    "adastra": "ad astra booking rooms",
    "babsonhealth": "Babson Health Services"
};

function searchFunction() {
    let inputs = document.getElementById('searchBar').value.toLowerCase().split(" ");
    let tiles = document.getElementsByClassName('tile');
    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < tiles.length; i++) {
        if (!keywords[tiles[i].id])
            continue;

        let keyword = keywords[tiles[i].id].toLowerCase();
        var show = false;
        inputs.forEach((input) => {
            if (keyword.includes(input)) {
                show = true;
            }
        });

        tiles[i].style.display = show ? "" : "none";

    }
}