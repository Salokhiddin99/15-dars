var elSiteHeader = document.querySelector('.site-header')
var elSiteHeaderToggle = document.querySelector('.js-header-toggle')

if(elSiteHeader) {
    elSiteHeaderToggle.addEventListener('click', function() {
        elSiteHeader.classList.toggle('site-header--open')
    })
}