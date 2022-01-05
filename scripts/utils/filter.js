<<<<<<< HEAD
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
    // l'option clicked
    const option = event.target;
    // la valeur de l'option clicked
    const optionValue = option.innerText;
    // le champ visible qui contient la valeur actuelle
    const filterValue = filter.children[0].children[0];

    // move current filter value to clicked option
    option.innerText = filterValue.innerText;
    // put old value of clicked option in filter value
    filterValue.innerText = optionValue;
    sortBy = filter.children[0].children[0].innerText;
=======
const filter = document.getElementById("filter1")
filter.children[0].addEventListener('click',toggleFilterOptions)
let sortBy = filter.children[0].children[0].innerText
function toggleFilterOptions()
{
	const filterOptions = filter.children[1];
	const filterImg = filter.children[0].children[1];
	if(filterOptions.style.display=="")
	{
		filterOptions.style.display = "block";
		filterImg.style.transform = "rotate(180deg)"
	}
	else
	{
		filterOptions.style.display = "";
        filterImg.style.transform = "rotate(0deg)"

	}
}
filter.children[1].addEventListener("keypress",selectFilterOption)
function selectFilterOption()
{
    // l'option clicked
	const option = event.target;
	// la valeur de l'option clicked
	const optionValue = option.innerText;
    // le champ visible qui contient la valeur actuelle
	const filterValue = filter.children[0].children[0];
   
	// move current filter value to clicked option
	option.innerText = filterValue.innerText;
	// put old value of clicked option in filter value
	filterValue.innerText = optionValue;
    sortBy = filter.children[0].children[0].innerText
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
    toggleFilterOptions();
    initMedia();
}

function sortMedia() {
    if (sortBy == "Popularité") {
<<<<<<< HEAD
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
=======
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
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
