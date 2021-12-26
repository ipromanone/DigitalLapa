const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav__item a');
const menuLength = menuItem.length;

for( let i = 0; i < menuLength; i++) {
    if(menuItem[i].href === currentLocation) {
        menuItem[i].className = 'nav__link--current'
    }
}