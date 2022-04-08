const link = document.querySelectorAll('html a[href^="#"]');

link.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');

    if (id == null) {
        return document.querySelector(id);
    } else {
        return document.querySelector(id).offsetTop;
    }   
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);

    scrollToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}
