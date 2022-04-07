class MobileNavbar2 {
    constructor(mobileMenu2, navList2) {
        this.mobileMenu2 = document.querySelector(mobileMenu2);
        this.navList2 = document.querySelector(navList2);
        this.activeClass2 = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navList2.classList.toggle(this.activeClass2);
        this.mobileMenu2.classList.toggle(this.activeClass2);
    }

    addClickEvent() {
        this.mobileMenu2.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu2) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar2 = new MobileNavbar2 (
    ".mobile-menu2",
    ".nav-list2",
    ".nav-list2 li",
);
mobileNavBar2.init();