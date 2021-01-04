// ttunniplaani objekt
const tunniplaan = new Tunniplaan(346, '2021-01-04');

// tunniplaani valjastamine

document.addEventListener('DOMContentLoaded', valjastaTunniplaan);

function valjastaTunniplaan() {
    tunniplaan.opetajaTunniplaanAndmed().then(tunnid => {

    }).catch(viga => console.log(viga));
}