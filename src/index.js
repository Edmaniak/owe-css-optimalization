import button from './components/button';
import style from './scss/style.scss';

document.write(`<div class="container"><div id="content" class="row"></div></div>`);

const content = document.getElementById("content");

content.insertAdjacentHTML('beforeend', button(5, "UHK", "http://uhk.cz"));
content.insertAdjacentHTML('beforeend', button(10, "FIM", "http://fim.uhk.cz"));
