// tunniplaani objekt
const tunniplaan = new Tunniplaan(346, '2021-01-04');
// kasutajaliideses objekt
const kl = new KasutajaLiides();

// tunniplaani valjastamine

document.addEventListener('DOMContentLoaded', valjastaTunniplaan);

function valjastaTunniplaan() {
    tunniplaan.opetajaTunniplaanAndmed().then(tunnid => {
        kl.printNadalaKuupaevad(kl.nadalaKuupaevad(tunnid));
    }).catch(viga => console.log(viga));
}