// basic indexedDB
const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

const request = indexedDB.open("ownage", 1);

request.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
};




// ownage button toggle function
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