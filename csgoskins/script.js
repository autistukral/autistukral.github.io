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

document.querySelectorAll('.skins_img').forEach(imgButton => imgButton.addEventListener('click', () => {
    if (imgButton.classList.contains('img_normal')) {
        imgButton.classList.replace('img_normal', 'img_zoomed')
    } else {
        imgButton.classList.replace('img_zoomed', 'img_normal')
    }
}))