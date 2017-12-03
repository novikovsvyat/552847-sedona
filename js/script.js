var link = document.querySelector(".hotel-search-button");
var popup = document.querySelector(".modal-hotel-search");
var form = popup.querySelector(".hotel-search-form");

var arrivalDate = popup.querySelector("[name=arrival-date]");
var leavingDate = popup.querySelector("[name=leaving-date]");
var adultCount = popup.querySelector("[name=adult-count]");
var childCount = popup.querySelector("[name=child-count]");

var adultMenus = popup.querySelector(".button-menus.adult-button");
var adultPlus = popup.querySelector(".button-plus.adult-button");
var childMenus = popup.querySelector(".button-menus.child-button");
var childPlus = popup.querySelector(".button-plus.child-button");

if (!popup.classList.contains("modal-hide") || !popup.classList.contains("modal-open")) {
		popup.classList.add("modal-hide");
		arrivalDate.required = false;
		leavingDate.required = false;
		adultCount.required = false;
		childCount.required = false;
} 

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	if (popup.classList.contains("modal-hide")) {
		popup.classList.remove("modal-hide");
		popup.classList.add("modal-open");
	} else {
		popup.classList.remove("modal-open");
		popup.classList.add("modal-hide");
	}
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
	if (!arrivalDate.value || !leavingDate.value || !adultCount.value || !childCount.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
		if (!arrivalDate.value) {
			arrivalDate.focus();
		} else if (!leavingDate.value) {
			leavingDate.focus();
		} else if (!adultCount.value) {
			adultCount.focus();
		} else if (!childCount.value.value) {
			childCount.focus();
		}
	} else {
    	localStorage.setItem("adultCount", adultCount.value);
    	localStorage.setItem("childCount", childCount.value);
    }
});

adultMenus.addEventListener("click", function(evt) {
	if (!adultCount.value) {
		adultCount.value = 0;
	} else if (adultCount.value > 0) {
		adultCount.value = parseInt(adultCount.value) - 1;
	}
});

adultPlus.addEventListener("click", function(evt) {
	if (!adultCount.value) {
		adultCount.value = 0;
		adultCount.value = parseInt(adultCount.value) + 1;
	} else {
		adultCount.value = parseInt(adultCount.value) + 1;
	}
});

childMenus.addEventListener("click", function(evt) {
	if (!childCount.value) {
		childCount.value = 0;
	} else if (childCount.value > 0) {
		childCount.value = parseInt(childCount.value) - 1;
	}
});

childPlus.addEventListener("click", function(evt) {
	if (!childCount.value) {
		childCount.value = 0;
		childCount.value = parseInt(childCount.value) + 1;
	} else {
		childCount.value = parseInt(childCount.value) + 1;
	}
});
