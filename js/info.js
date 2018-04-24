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
    "dining": "dining menu",
    "trim": "trim menu",
    "calendar": "calendar event",
    "printing": "printing printer",
    "laundry": "laundry",
    "shuttle": "BOW shuttle",
    "it": "it wiki wifi ubuntu matlab linux windows",
    "onecard": "one card blackboard",
    "tools": "tools machine shop",
    "degree_reqs": "Degree requirements",
    "reimbursement": "Reimbursement forms",
    "sgconstitution": "SG constitution student government",
    "offcampus": "get off campus pop the bubble shuttle",
    "mailing": "mailing lists",
    "star": "star forms",
    "oss": "OSS forms",
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