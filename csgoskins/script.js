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
        }, 150));
    } else {
        imgButton.classList.replace('img_zoomed', 'img_normal');
        enableScroll();
        imgButton.src = imgButton.src.replace('high_', 'low_');
    }
}))

// next section arrow
var currentTargetIndex = 0;

var scrolling = false;

var targetDivs = document.querySelectorAll('.sections');

window.addEventListener('scroll', function () {

    if (!scrolling) {

        scrolling = true;

        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        targetDivs.forEach(function (targetDiv, index) {
            var rect = targetDiv.getBoundingClientRect();

            if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
                currentTargetIndex = index;
            }
        });

        setTimeout(function () {
            scrolling = false;
        }, 50);
    }
});

function scrollToNextDiv(event) {

    event.preventDefault();

    if (window.scrollY === 0) {
        currentTargetIndex = 0;
    };

    if (currentTargetIndex < targetDivs.length - 1 && !scrolling) {

        currentTargetIndex++;

        targetDivs[currentTargetIndex].scrollIntoView({ behavior: 'auto', block: 'center' });

        setTimeout(function () {
            scrolling = false;
        }, 5);

    };

};

function scrollToPrevDiv(event) {

    event.preventDefault();

    if (window.scrollY === 0) {
        currentTargetIndex = 0;
    };

    if (currentTargetIndex < targetDivs.length - 1 && !scrolling) {

        if (currentTargetIndex <= 0) {
            currentTargetIndex = 0;
        } else {
            currentTargetIndex--;
        }

        if (currentTargetIndex < 1) {
            window.scrollTo({
                top: 0,
                behavior: 'auto'
            });
        } else {
            targetDivs[currentTargetIndex].scrollIntoView({ behavior: 'auto', block: 'center' });
        }

        setTimeout(function () {
            scrolling = false;
        }, 5);

    };

};

var scrollTimeout;

function startScrolling(direction) {
    var scrollHeight = (direction === 'down') ? document.body.scrollHeight : 0;

    scrollTimeout = setTimeout(function () {
        window.scrollTo({
            top: scrollHeight,
            behavior: 'auto'
        });
    }, 250); // Set the delay in milliseconds
};

function stopScrolling() {
    clearTimeout(scrollTimeout);
}

document.addEventListener('mouseup', stopScrolling);

// drag and scroll
