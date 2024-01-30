// load variable
const loader = document.querySelector('.load');

// load functions
function load() {
    loader.classList.remove('loaded');
}

function loaded() {
    loader.classList.add('loaded');
}

// page load
window.addEventListener('DOMContentLoaded', () => {
    loaded();
});

// temporary ownage button toggle function
document.querySelectorAll('.ownBtn').forEach(ownButton => ownButton.addEventListener('click', () => {
    if (ownButton.classList.contains('deown')) {
        ownButton.classList.replace('deown', 'owned')
        const Pskins = ownButton.parentElement;
        Pskins.classList.replace('ObackColor', 'backColor')
    } else {
        ownButton.classList.replace('owned', 'deown');
        const Pskins = ownButton.parentElement;
        Pskins.classList.replace('backColor', 'ObackColor');
    }
}));

// stop scrolling vars
var keys = { 32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1 };

// disable / enable scrolling
function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

// image zoom with scroll disable/enable

document.querySelectorAll('.skins_img').forEach(imgButton => imgButton.addEventListener('click', () => {
    if (imgButton.classList.contains('img_normal')) {
        load();
        setTimeout(() => {
            imgButton.classList.replace('img_normal', 'img_zoomed');
            imgButton.src = imgButton.src.replace('low_', 'high_');
        }, 150);
        disableScroll();
        imgButton.onload(setTimeout(() => {
            loaded();
        }, 200));
    } else {
        imgButton.classList.replace('img_zoomed', 'img_normal');
        enableScroll();
        imgButton.src = imgButton.src.replace('high_', 'low_');
    }
}))

// loading disable scroll
