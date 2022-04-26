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

    function modal_analytics() {
        window.ga('send', 'event', {
            'eventCategory': 'modal',
            'eventAction': 'click',
            'eventLabel': $(this).data('target'),
        });
    }

    function tile_analytics() {
        window.ga('send', 'event', {
            'eventCategory': 'tile',
            'eventAction': 'click',
            'eventLabel': this.id,
            'eventValue': this.href,
        });
    }

    function modal_link_analytics() {
        window.ga('send', 'event', {
            'eventCategory': 'modal link',
            'eventAction': 'click',
            'eventLabel': this.text,
            'eventValue': this.href,
        });
    }

    function link_analytics() {
        window.ga('send', 'event', {
            'eventCategory': 'link',
            'eventAction': 'click',
            'eventLabel': this.text.trim(),
            'eventValue': this.href,
        });
    }

    function is_direct_link() {
        return this.href && (this.href[this.href.length-1] != '#');
    }

    $('a[data-toggle="modal"]').on('click', modal_analytics);
    $('a.tile').filter(is_direct_link).on('click', tile_analytics);
    $('a.list-group-item').filter(is_direct_link).on('click', modal_link_analytics);
    $('a').on('click', link_analytics);
});


let keywords = {
    "dining": "dining hall olin trim wellesley babson dinner lunch breakfast brunch hours menus restaurant Lulu Chow Wang Campus Center food drink hours schedule transact order app",
    "flyolinfly": "fly flights airport ride carpool transportation",
    "printing": "print printing printers",
    "laundry": "laundry machines washer dryer status",
    "transportation": "Olin ride share rideshare car carpool BOW Babson Wellesley Olin shuttle transportation get off campus pop bubble shuttle boston cars parking permit olin whose borrow go bikes bicycles",
    "it": "it wiki wifi ubuntu matlab linux windows reset password android phone ios solidworks technical support install set up setup connect network",
    "coursesReqs": "add drop Degree course graduate graduation major concentration requirements planner planning templates ahs humanities arts BOW Babson Wellesley Olin Brandeis Cross course browser registration catalogs co-curricular cocurricular student handbooks coloring",
    "onecard": "one card blackboard onecard money laundry recharge refill transact",
    "libraries": "BOW Babson Wellesley Olin Library Libraries help writing ta ninja tools drill sewing borrow request order minuteman",
    "mailing": "mailing lists carpediem helpme email",
    "forms": "forms requests star oss reimbursement purchasing p-card p card spending cross register add drop course Self Study Requirement work order workorder passionate pursuit proposal Independent Research ISRG ISR-G ECE stockroom parts direct deposit bikes bicycle registration missed pay previous time sheet card timesheet timecard adp employment worker voucher tax w4 w-4 i9 i-9 m4 m-4 payroll intellectual property agreement handbook campus visit visitor guest submit upload",
    "adastra": "ad astra booking rooms reserve reservation schedule scheduling reserve space",
    "babsonhealth": "Babson Health Services colony care wellness mental counseling therapy betterhelp",
    "club": "SG constitution student government core Committee Clubs Organizations Orgs Acronym aero badminton board climbing cardistry DnD D&D Dungeons Dragons outing puzzle soft robotics formula baja oars core cco serv slac frisbee rocket Phoenix aquatic",
    "jobs": "handshake fellowship sketch model pint summer 2020 jobs opportunities opportunity",
    "olinahead": "olin ahead olinahead updates covid covid-19 coronavirus safety return campus masks handwashing hygiene testing results schedule risks bubble test visit visitor guest form asymptomatic dashboard cases results stats statistics",
    "sos": "help student meal delivery dropoff study check walk buddy alone company advice vent mail animal pet mailroom volunteer",
    "shop":"machine shop tools work order workorder training lab equipment machines material sourcing 3d print mill lathe manufacture fabrication",
    "remoteaccess":"remote access vpn juniper IT it"
};

function searchFunction() {
    let inputs = document.getElementById('searchBar').value.toLowerCase().trim();
    let tiles = document.getElementsByClassName('tile');
    if (!inputs) {
        // Show all tiles
        for (let tile of tiles)
            tile.style.display = "";
    } else {
        if (inputs.length >= 3) {
            window.ga('send', 'event', {
                eventCategory: 'search',
                eventAction: 'word entry',
                eventLabel: inputs,
            });
        }
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
