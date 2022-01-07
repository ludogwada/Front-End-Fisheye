const filter = document.getElementById("filter1");
let sortBy = filter.children[0].children[0].innerText;
function toggleFilterOptions() {
    const filterOptions = filter.children[1];
    const filterImg = filter.children[0].children[1];
    if (filterOptions.style.display == "") {
        filterOptions.style.display = "block";
        filterImg.style.transform = "rotate(180deg)";
    } else {
        filterOptions.style.display = "";
        filterImg.style.transform = "rotate(0deg)";
    }
}

function selectFilterOption() {
    const option = event.target;
    const optionValue = option.innerText;
    const filterValue = filter.children[0].children[0];

    option.innerText = filterValue.innerText;
    filterValue.innerText = optionValue;
    sortBy = filter.children[0].children[0].innerText;
    toggleFilterOptions();
    initMedia();
}

function sortMedia() {
    if (sortBy == "Popularité") {
        media.sort((a, b) => b.likes - a.likes);
    }
    if (sortBy == "Date") {
        media.sort(function (a, b) {
            let DateA = Date.parse(a.date);
            let DateB = Date.parse(b.date);
            return DateB - DateA;
        });
    }
    if (sortBy == "Titre") {
        media.sort(function (a, b) {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
    }
}

filter.children[0].addEventListener("click", toggleFilterOptions);
filter.children[1].addEventListener("keypress", selectFilterOption);
