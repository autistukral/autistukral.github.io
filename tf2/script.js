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

const scout = document.querySelector('.c--scout');
const soldier = document.querySelector('.c--soldier');
const pyro = document.querySelector('.c--pyro');
const demoman = document.querySelector('.c--demoman');
const heavy = document.querySelector('.c--heavy');
const engineer = document.querySelector('.c--engineer');
const medic = document.querySelector('.c--medic');
const sniper = document.querySelector('.c--sniper');
const spy = document.querySelector('.c--spy');
const list = document.querySelector('.classes--list');


document.querySelector('.vishid--scout').addEventListener('click', () => {
    if (scout.classList.contains('visible')) {
        scout.classList.replace('visible', 'hidden');
        list.classList.replace('l--hid', 'l--vis');
    } else {
        scout.classList.replace('hidden', 'visible');
        list.classList.replace('l--vis', 'l--hid');
    };
    soldier.classList.replace('visible', 'hidden');
    pyro.classList.replace('visible', 'hidden');
    demoman.classList.replace('visible', 'hidden');
    heavy.classList.replace('visible', 'hidden');
    engineer.classList.replace('visible', 'hidden');
    medic.classList.replace('visible', 'hidden');
    sniper.classList.replace('visible', 'hidden');
    spy.classList.replace('visible', 'hidden');
});

document.querySelector('.vishid--soldier').addEventListener('click', () => {
    if (soldier.classList.contains('visible')) {
        soldier.classList.replace('visible', 'hidden');
        list.classList.replace('l--hid', 'l--vis');
    } else {
        soldier.classList.replace('hidden', 'visible');
        list.classList.replace('l--vis', 'l--hid');
    };
    scout.classList.replace('visible', 'hidden');
    pyro.classList.replace('visible', 'hidden');
    demoman.classList.replace('visible', 'hidden');
    heavy.classList.replace('visible', 'hidden');
    engineer.classList.replace('visible', 'hidden');
    medic.classList.replace('visible', 'hidden');
    sniper.classList.replace('visible', 'hidden');
    spy.classList.replace('visible', 'hidden');
});

document.querySelector('.vishid--pyro').addEventListener('click', () => {
    if (pyro.classList.contains('visible')) {
        pyro.classList.replace('visible', 'hidden');
        list.classList.replace('l--hid', 'l--vis');
    } else {
        pyro.classList.replace('hidden', 'visible');
        list.classList.replace('l--vis', 'l--hid');
    };
    scout.classList.replace('visible', 'hidden');
    soldier.classList.replace('visible', 'hidden');
    demoman.classList.replace('visible', 'hidden');
    heavy.classList.replace('visible', 'hidden');
    engineer.classList.replace('visible', 'hidden');
    medic.classList.replace('visible', 'hidden');
    sniper.classList.replace('visible', 'hidden');
    spy.classList.replace('visible', 'hidden');
});

document.querySelector('.vishid--demoman').addEventListener('click', () => {
    if (demoman.classList.contains('visible')) {
        demoman.classList.replace('visible', 'hidden');
        list.classList.replace('l--hid', 'l--vis');
    } else {
        demoman.classList.replace('hidden', 'visible');
        list.classList.replace('l--vis', 'l--hid');
    };
    scout.classList.replace('visible', 'hidden');
    soldier.classList.replace('visible', 'hidden');
    pyro.classList.replace('visible', 'hidden');
    heavy.classList.replace('visible', 'hidden');
    engineer.classList.replace('visible', 'hidden');
    medic.classList.replace('visible', 'hidden');
    sniper.classList.replace('visible', 'hidden');
    spy.classList.replace('visible', 'hidden');
});

document.querySelector('.vishid--heavy').addEventListener('click', () => {
    if (heavy.classList.contains('visible')) {
        heavy.classList.replace('visible', 'hidden');
        list.classList.replace('l--hid', 'l--vis');
    } else {
        heavy.classList.replace('hidden', 'visible');
        list.classList.replace('l--vis', 'l--hid');
    };
    scout.classList.replace('visible', 'hidden');
    soldier.classList.replace('visible', 'hidden');
    pyro.classList.replace('visible', 'hidden');
    demoman.classList.replace('visible', 'hidden');
    engineer.classList.replace('visible', 'hidden');
    medic.classList.replace('visible', 'hidden');
    sniper.classList.replace('visible', 'hidden');
    spy.classList.replace('visible', 'hidden');
});

document.querySelector('.vishid--engineer').addEventListener('click', () => {
    if (engineer.classList.contains('visible')) {
        engineer.classList.replace('visible', 'hidden');
        list.classList.replace('l--hid', 'l--vis');
    } else {
        engineer.classList.replace('hidden', 'visible');
        list.classList.replace('l--vis', 'l--hid');
    };
    scout.classList.replace('visible', 'hidden');
    soldier.classList.replace('visible', 'hidden');
    pyro.classList.replace('visible', 'hidden');
    demoman.classList.replace('visible', 'hidden');
    heavy.classList.replace('visible', 'hidden');
    medic.classList.replace('visible', 'hidden');
    sniper.classList.replace('visible', 'hidden');
    spy.classList.replace('visible', 'hidden');
});

document.querySelector('.vishid--medic').addEventListener('click', () => {
    if (medic.classList.contains('visible')) {
        medic.classList.replace('visible', 'hidden');
        list.classList.replace('l--hid', 'l--vis');
    } else {
        medic.classList.replace('hidden', 'visible');
        list.classList.replace('l--vis', 'l--hid');
    };
    scout.classList.replace('visible', 'hidden');
    soldier.classList.replace('visible', 'hidden');
    pyro.classList.replace('visible', 'hidden');
    demoman.classList.replace('visible', 'hidden');
    heavy.classList.replace('visible', 'hidden');
    engineer.classList.replace('visible', 'hidden');
    sniper.classList.replace('visible', 'hidden');
    spy.classList.replace('visible', 'hidden');
});

document.querySelector('.vishid--sniper').addEventListener('click', () => {
    if (sniper.classList.contains('visible')) {
        sniper.classList.replace('visible', 'hidden');
        list.classList.replace('l--hid', 'l--vis');
    } else {
        sniper.classList.replace('hidden', 'visible');
        list.classList.replace('l--vis', 'l--hid');
    };
    scout.classList.replace('visible', 'hidden');
    soldier.classList.replace('visible', 'hidden');
    pyro.classList.replace('visible', 'hidden');
    demoman.classList.replace('visible', 'hidden');
    heavy.classList.replace('visible', 'hidden');
    engineer.classList.replace('visible', 'hidden');
    medic.classList.replace('visible', 'hidden');
    spy.classList.replace('visible', 'hidden');
});

document.querySelector('.vishid--spy').addEventListener('click', () => {
    if (spy.classList.contains('visible')) {
        spy.classList.replace('visible', 'hidden');
        list.classList.replace('l--hid', 'l--vis');
    } else {
        spy.classList.replace('hidden', 'visible');
        list.classList.replace('l--vis', 'l--hid');
    };
    scout.classList.replace('visible', 'hidden');
    soldier.classList.replace('visible', 'hidden');
    pyro.classList.replace('visible', 'hidden');
    demoman.classList.replace('visible', 'hidden');
    heavy.classList.replace('visible', 'hidden');
    engineer.classList.replace('visible', 'hidden');
    medic.classList.replace('visible', 'hidden');
    sniper.classList.replace('visible', 'hidden');
});

// market selection context menu
var rmenu_class = document.querySelectorAll('.skin');
rmenu_class.forEach(rmenu_js => rmenu_js.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    rmenu_js.lastElementChild.classList.replace('rmenu_hide', 'rmenu_show');
    window.addEventListener('click', function () {
        rmenu_js.lastElementChild.classList.replace('rmenu_show', 'rmenu_hide');
    });
}, false));

rmenu_class.forEach(rmenu_js2 => rmenu_js2.addEventListener('click', function (event) {

}, false));





