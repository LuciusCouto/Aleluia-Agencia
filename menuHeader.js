nav_list = window.document.querySelector(".nav-list");
mobile_menu = window.document.querySelector(".mobile-menu");
activeBoolean = false;

function active() {
    if (activeBoolean == false) {
        nav_list.classList.add("active");
        mobile_menu.classList.add("active");
        activeBoolean = true;
    } else {
        nav_list.classList.remove("active");
        mobile_menu.classList.remove("active");
        activeBoolean = false;
    };
}

function disable() {
    nav_list.classList.remove("active");
    mobile_menu.classList.remove("active");
}